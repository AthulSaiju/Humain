import HumainForm from "@/components/HumainForm";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newHumainPermissions } from "@/lib/actions/humain.actions";
import Link from "next/link";

const NewHumain = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateHumain = await newHumainPermissions();

  return (

        <section className=' w-full min-h-screen bg-white max-sm:px-4'>

           <div className="absolute inset-0 pointer-events-none z-40">
    {/* vertical lines */}
    <div
      className="absolute w-px h-full bg-black opacity-20 max-sm:hidden"
      style={{ left: "30.4%" }}
    />
    {/* <div
      className="absolute w-px h-full bg-black opacity-20"
      style={{ left: "50%" }}
    /> */}
    <div
      className="absolute w-px h-full bg-black opacity-20 max-sm:hidden"
      style={{ right: "30.4%" }}
    />

    {/* horizontal lines */}
    <div
      className="absolute h-px w-full bg-black opacity-20"
      style={{ top: "8%" }}
    />
    <div
      className="absolute h-px w-full bg-black opacity-20 "
      style={{ bottom: "11%" }}
    />


  </div>


    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateHumain ? (
        <article className="w-full gap-4 flex flex-col text-center">
          <h1 className="mb-4">Humain Builder</h1>

          <HumainForm />
        </article>
       ) : (
        <article className="companion-limit">
          <video
            className="w-full h-full object-cover"
            src="/video/wallet2.webm"
            autoPlay
          
            muted
            playsInline
          ></video>

          <div className="cta-badge">Upgrade your plan</div>
          <h1>You’ve Reached Your Limit</h1>
          <p>
            You’ve reached your humain limit. Upgrade to create more humain and
            premium features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
       )}
    </main>
    </section>
  );
};

export default NewHumain;
