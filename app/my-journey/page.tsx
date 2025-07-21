import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  getUserHumains,
  getUserSessionCount,
  getUserSessions,
} from "@/lib/actions/humain.actions";
import Image from "next/image";
import HumainsList from "@/components/HumainsList";

const Profile = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  // fetch data
  const humains = await getUserHumains(user.id);
  const rawSessions = await getUserSessions(user.id, 5); // limit to 10
  const sessionHistory = rawSessions.flat(); // flatten to Humain[]
  const totalSessions = await getUserSessionCount(user.id);

  return (
    <section className="relative w-full min-h-screen lg:pt-[6vh] pb-4 bg-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* vertical lines */}
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ left: "15%" }}
        />
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ left: "50%" }}
        />
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ right: "15%" }}
        />

        {/* horizontal lines */}
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "17%" }}
        />
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "80%" }}
        />
      </div>

      <main className="min-lg:w-3/4 relative z-10 max-sm:gap-2">
        <section className="flex justify-between gap-4 max-sm:flex-col lg:p-2 lg:px-4 py-6 items-center custom-bg rounded-xl">
          <div className="relative flex gap-4 items-center">
            <Image
              src={user.imageUrl}
              alt={user.firstName!}
              width={110}
              height={110}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold lg:text-2xl text-xl text-amber-50">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-sm text-muted-foreground">
                {user.emailAddresses[0].emailAddress}
              </p>
            </div>
          </div>
          <div className="flex gap-4 h-full  items-center">
            <div className="bg-[#292929] rounded-2xl p-3 gap-2 flex flex-col h-fit ">
              <div className="flex gap-2 items-center">
                <Image
                  src="/icons/check.svg"
                  alt="checkmark"
                  width={30}
                  height={30}
                />
                <p className="text-2xl font-bold text-white opacity-60">
                  {totalSessions}
                </p>
              </div>
              <div className=" text-white opacity-50 max-sm:text-sm">Lessons completed</div>
            </div>

            <div className=" bg-orange-600 rounded-2xl p-3 gap-2 flex flex-col h-fit">
              <div className="flex gap-2 items-center">
                <Image src="/icons/bot.svg" alt="cap" width={32} height={32} />
                <p className="text-2xl font-bold text-white opacity-60">
                  {humains.length}
                </p>
              </div>
              <div className=" text-white opacity-50 max-sm:text-sm">Humains created</div>
            </div>
          </div>
        </section>

        <section className="custom-bg lg:p-8 px-4 py-8 lg:rounded-4xl rounded-xl">
          {/* only change: defaultValue on Accordion */}
          <Accordion
            type="multiple"
            defaultValue={["recent"]}
            className="gap-4"
          >
            <AccordionItem
              value="humains"
              className="bg-orange-600 lg:px-6 lg:py-4 px-4 rounded-2xl border-none mb-4"
            >
              <AccordionTrigger
                className={cn(
                  "lg:text-2xl text-xl font-bold text-white opacity-80",
                  // target the chevron svg directly:
                  "[&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-black"
                )}
              >
                My Humains {`(${humains.length})`}
              </AccordionTrigger>
              <AccordionContent>
                <HumainsList title="" humains={humains} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="recent"
              className="bg-[#292929] lg:px-6 lg:py-4 px-4 rounded-2xl border-none mb-4"
            >
              <AccordionTrigger
                className={cn(
                  "lg:text-2xl text-xl font-bold text-white opacity-80",
                  // target the chevron svg directly:
                  "[&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-orange-500"
                )}
              >
                Recent Sessions
              </AccordionTrigger>
              <AccordionContent>
                <HumainsList title="" humains={sessionHistory} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>
    </section>
  );
};

export default Profile;
