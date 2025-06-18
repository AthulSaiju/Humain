import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import {
  getUserHumains,
  getUserSessions,
  getBookmarkedHumains,
} from "@/lib/actions/humain.actions";
import Image from "next/image";
import HumainsList from "@/components/HumainsList";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const humains = await getUserHumains(user.id);
  const sessionHistory = await getUserSessions(user.id);
  const bookmarkedHumains = await getBookmarkedHumains(user.id);

  return (
    <main className="min-lg:w-3/4">
      <section className="flex justify-between gap-4 max-sm:flex-col items-center">
        <div className="flex gap-4 items-center">
          <Image
            src={user.imageUrl}
            alt={user.firstName!}
            width={110}
            height={110}
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {user.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/check.svg"
                alt="checkmark"
                width={22}
                height={22}
              />
              <p className="text-2xl font-bold">{sessionHistory.length}</p>
            </div>
            <div>Lessons completed</div>
          </div>
          <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
            <div className="flex gap-2 items-center">
              <Image src="/icons/cap.svg" alt="cap" width={22} height={22} />
              <p className="text-2xl font-bold">{humains.length}</p>
            </div>
            <div>Humains created</div>
          </div>
        </div>
      </section>
      <Accordion type="multiple">
        <AccordionItem value="bookmarks">
          <AccordionTrigger className="text-2xl font-bold">
            Bookmarked Humains {`(${bookmarkedHumains.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <HumainsList
              humains={bookmarkedHumains}
              title="Bookmarked Humains"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="recent">
          <AccordionTrigger className="text-2xl font-bold">
            Recent Sessions
          </AccordionTrigger>
          <AccordionContent>
            <HumainsList
              title="Recent Sessions"
              humains={sessionHistory}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="humains">
          <AccordionTrigger className="text-2xl font-bold">
            My Humains {`(${humains.length})`}
          </AccordionTrigger>
          <AccordionContent>
            <HumainsList title="My Humains" humains={humains} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Profile