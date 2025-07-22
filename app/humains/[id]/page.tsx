import { getHumain } from '@/lib/actions/humain.actions';
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import Image from "next/image";
import HumainComponent from '@/components/HumainComponent';

interface HumainSessionPageProps {
    params: Promise<{ id: string}>;
}


const HumainSession = async ({ params }: HumainSessionPageProps) => {

  const { id } = await params;
    const humain = await getHumain(id);
    const user = await currentUser();

   const { name, subject, topic, duration } = humain;

    if(!user) redirect('/sign-in');
    if(!name) redirect('/humains')


  return (
    <section className=' w-full max-h-screen bg-white'>
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
          style={{ top: "10%" }}
        />
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "80%" }}
        />
      </div>
    <main>

        <section className='custom-bg lg:p-8 p-5 rounded-4xl gap-2 mb-1 z-10'>
            <article className="flex rounded-2xl justify-between p-6 flex-wrap  bg-[#c2bebd] mb-4">

                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden">
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold lg:text-2xl text-lg">
                                {name}
                            </p>
                            <div className="subject-badge ">
                                {subject}
                            </div>
                        </div>
                        <p className="lg:text-lg max-sm:text-sm">{topic}</p>
                    </div>
                </div>
                <div className="items-start lg:text-lg text-sm">
                    <div className="flex items-center gap-1">
                            <Image
                              src="/icons/clock.svg"
                              alt="duration"
                              width={13.5}
                              height={13.5}
                            />
                            <p className="">{duration}m</p>
                          </div>
                </div>
            </article>

            <HumainComponent
                {...humain}
                humainId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
            </section>
        </main>
        </section>
  )
}

export default HumainSession