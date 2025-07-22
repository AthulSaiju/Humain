"use client";
import { useEffect, useRef, useState } from "react";
import { cn, configureAssistant } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from "@/constants/soundwaves.json";
import { addToSessionHistory } from "@/lib/actions/humain.actions";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const HumainComponent = ({
  humainId,
  subject,
  topic,
  name,
  style,
  voice,
}: HumainComponentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<SavedMessage[]>([]);

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef) {
      if (isSpeaking) {
        lottieRef.current?.play();
      } else {
        lottieRef.current?.stop();
      }
    }
  }, [isSpeaking, lottieRef]);

  useEffect(() => {
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
      addToSessionHistory(humainId);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [newMessage, ...prev]);
      }
    };

    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);

    const onError = (error: Error) => console.log("Error", error);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("error", onError);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("error", onError);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
    };
  }, [humainId]);

  const toggleMicrophone = () => {
    const isMuted = vapi.isMuted();
    vapi.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleCall = async () => {
  // 1️⃣ Force permission prompt
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch (err) {
    console.error("Mic permission denied or unavailable:", err);
    alert("Please allow microphone access to use voice chat.");
    return;
  }

  // 2️⃣ Proceed with vapi.start
  setCallStatus(CallStatus.CONNECTING);
  const assistantOverrides = {
    variableValues: { subject, topic, style },
    clientMessages: ["transcript"],
    serverMessages: [],
  };

  try {
    // @ts-expect-error: vapi.start is untyped here
    vapi.start(configureAssistant(voice, style), assistantOverrides);
  } catch (err) {
    // err is unknown by default—narrow it to Error if possible
    let message = "Could not start audio session.";
    if (err instanceof Error && err.message) {
      message = err.message;
    }
    console.error("Failed to start VAPI session:", err);
    setCallStatus(CallStatus.FINISHED);
    alert(message);
  }
};


  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <section className="flex flex-col h-full">
      <section className="flex gap-4 max-sm:flex-col">
        {/* -------------------------------------------------------------Humain Card------------------------------------------------------------------------ */}
        <div className="companion-section relative ">
          <div className="companion-avatar lg:rounded-2xl rounded-lg w-full bg-orange-600">
            <div className="absolute top-0 left-4 opacity-40 text-sm text-white max-sm:hidden">
              humain
            </div>
            <p className="absolute top-0 right-4 opacity-40 text-sm text-white">
              gpt-4o
            </p>
            <div
              className={cn(
                "absolute bottom-0 transition-opacity w-full flex justify-center duration-1000 z-20",
                callStatus === CallStatus.FINISHED ||
                  callStatus === CallStatus.INACTIVE
                  ? "opacity-100"
                  : "opacity-100",
                callStatus === CallStatus.CONNECTING &&
                  "opacity-100 animate-pulse"
              )}
            >
              {/* <Image
                src={`/images/bot4.png`}
                alt={subject}
                width={320}
                height={400}
                className=""
              /> */}
               {/* ── Mobile (up to sm) ── */}
  <div className="sm:hidden">
    <Image
      src="/images/bot4half.png"
      alt={subject}
      width={250}     // smaller width for mobile
      height={350}    // adjust as needed
      className=""
      priority
    />
  </div>

  {/* ── Desktop (sm and up) ── */}
  <div className="hidden sm:block">
    <Image
      src="/images/bot4.png"
      alt={subject}
      width={320}     // larger width for desktop
      height={400}
      priority
    />
  </div>


            </div>

            <div
              className={cn(
                "absolute bottom-0 transition-opacity duration-1000 z-30 glass4 w-full rounded-b-2xl flex justify-center max-sm:h-15",
                callStatus === CallStatus.ACTIVE ? "opacity-100" : "opacity-90"
              )}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={soundwaves}
                autoplay={false}
                className="companion-lottie max-sm:-mt-5"
              />
            </div>
          </div>

          <div className="absolute bottom-0  w-full text-white opacity-30  max-w-full  max-h-full z-10  overflow-clip">
            <p className="font-bold text-lg lg:text-5xl lg:mt-8 uppercase max-sm:mt-2 ">{name}</p>
            <p className="font-bold text-3xl lg:text-7xl uppercase max-sm:-mt-2 ">{name}</p>
            <p className="font-bold text-5xl lg:text-8xl max-sm:-mt-2 uppercase ">{name}</p>
            <p className="font-bold lg:text-9xl uppercase ">{name}</p>
          </div>
        </div>

        {/* -------------------------------------------------------------User Section------------------------------------------------------------------------ */}

        <div className="user-section gap-4 rounded-2xl">

            {/* -------------------------------Transcript Section------------------------------------ */}

          <section className="transcript lg:rounded-2xl rounded-lg bg-[#1c1c1c] h-81 lg:h-full p-4 overflow-hidden">
            <div className="transcript-message no-scrollbar overflow-y-auto">
              {messages.map((message, index) => {
                if (message.role === "assistant") {
                  return (

                    <p key={index} className="text-white lg:text-lg text-sm bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
                     
                      {message.content}
                    </p>
                    


                  );
                } else {
                  return (
                    <p key={index} className="text-black lg:text-lg text-sm bg-[#87c4cc] max-w-fit  rounded-4xl self-end p-2 text-center px-4">
                       {message.content}
                    </p>
                  );
                }
              })}
            </div>
          </section>


          {/* -------------------------------mic , start , avtar------------------------------------ */}



          <div className=" flex gap-4  rounded-4xl">
          {/* <div className="user-avatar">
            <Image
              src={userImage}
              alt="you"
              width={60}
              height={70}
              className="rounded-full"
            />
            
          </div> */}
          <div
            className="rounded-full flex flex-col p-2 items-center w-fit max-sm:py-2 bg-[#646464]"
           
          >
            
           
          </div>
          {/* <button
            className={cn(
              "rounded-4xl py-2 cursor-pointer transition-colors w-full text-white",
              callStatus === CallStatus.ACTIVE ? "bg-red-700" : "bg-primary",
              callStatus === CallStatus.CONNECTING && "animate-pulse"
            )}
            onClick={
              callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall
            }
          >
            {callStatus === CallStatus.ACTIVE
              ? "End Session"
              : callStatus === CallStatus.CONNECTING
              ? "Connecting"
              : "Start Session"}
          </button> */}
          {/* <div className="user-avatar">
            <Image
              src={userImage}
              alt="you"
              width={60}
              height={70}
              className="rounded-full"
            />
            
          </div> */}
          </div>

{/* 
          ------------------------------------------------------------------------------------------------------------------------------------- */}


        </div>
      </section>

{/* -------------------------------final-Section----------------------------------- */}


      <section className="rounded-2xl bg-[#1c1c1c] lg:h-26 lg:py-5  lg:px-52 overflow-hidden mt-4   max-sm:flex-col max-sm:bg-transparent">

        <div className=" bg-[#3d3d3d]  w-full  flex lg:gap-4 lg:px-4 py-2 px-2 gap-2 rounded-4xl overflow-clip">

          
          <button
            className="btn-mic mic"
            onClick={toggleMicrophone}
            disabled={callStatus !== CallStatus.ACTIVE}
          >
            <Image
              src={isMuted ? "/icons/mic-off.svg" : "/icons/mic-on.svg"}
              alt="mic"
              width={36}
              height={36}
            />
            {/* <p className="max-sm:hidden">
                            {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                        </p> */}
          </button>
          <button
            className={cn(
              "rounded-4xl py-2 cursor-pointer transition-colors w-full text-white",
              callStatus === CallStatus.ACTIVE ? "bg-red-700" : "bg-primary",
              callStatus === CallStatus.CONNECTING && "animate-pulse"
            )}
            onClick={
              callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall
            }
          >
            {callStatus === CallStatus.ACTIVE
              ? "End Session"
              : callStatus === CallStatus.CONNECTING
              ? "Connecting"
              : "Start Session"}
          </button>
          
          </div>
  {/* <div className="transcript-message no-scrollbar h-full overflow-y-auto flex flex-col gap-2 ">
   
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    <p className="text-white max-sm:text-sm text-lg bg-[#444444] max-w-fit p-2 text-center px-4 rounded-4xl">
       This is an example assistant message 2.
    </p>
    
    <p className="text-black max-sm:text-sm bg-[#87c4cc] max-w-fit  rounded-4xl self-end p-2 text-lg text-center px-4">
      This is an example user reply.
    </p>
  </div> */}
</section>
    </section>
  );
};

export default HumainComponent;

