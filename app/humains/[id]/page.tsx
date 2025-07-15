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
    <section className=' w-full min-h-screen bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)] '>
    <main className='' >

        <section className='custom-bg p-8 rounded-4xl gap-2'>
            <article className="flex rounded-2xl justify-between p-6 flex-wrap  bg-[#c2bebd] mb-4">

                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden">
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
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