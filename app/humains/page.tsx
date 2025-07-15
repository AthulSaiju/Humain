import { getAllHumains } from "@/lib/actions/humain.actions";
import HumainCard from "@/components/HumainCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import Image from "next/image";
import Link from "next/link";

const HumainsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const humains = await getAllHumains({ subject, topic, limit: 6 });

  return (
    <section className="relative w-full min-h-screen bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)]">
      <div className="absolute inset-0 pointer-events-none">
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
          className="absolute h-px w-full bg-black opacity-20 top-[27%] lg:top-[23%]"
          // style={{ top: "23%" }}
        />
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "87%" }}
        />
      </div>

      <main className="">
        <section className="flex items-center justify-between gap-4 max-sm:flex-col">
          <h1 className="">Featured Humains</h1>
          <div className="flex lg:max-w-2/3 gap-4 items-center">
            <SearchInput />
            <SubjectFilter />

            <div className="relative flex w-full rounded-lg justify-center  max-sm:hidden">
              <Link href="/humains/new">
                <button className=" p-4 flex items-center w-[200px] gap-4 rounded-full bg-black justify-center text-white cursor-pointer">
                  <p>Build Humain</p>
                  {/* <div className="w-16 h-16 bg-orange-600 rounded-full "></div> */}
                  <Image
                    src="/icons/plus.svg"
                    alt="duration"
                    width={18.5}
                    height={18.5}
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="relative lg:hidden flex w-full rounded-lg justify-center ">
          <Link href="/humains/new">
            <button className=" p-4 flex items-center w-[200px] gap-4 rounded-full bg-black justify-center text-white cursor-pointer">
              <p>Build Humain</p>
              {/* <div className="w-16 h-16 bg-orange-600 rounded-full "></div> */}
              <Image
                src="/icons/plus.svg"
                alt="duration"
                width={18.5}
                height={18.5}
              />
            </button>
          </Link>
        </div>

        <section className="companions-grid lg:mt-6 mt:2 max-sm:mb-4">
          {humains.map((humain) => (
            <HumainCard
              key={humain.id}
              {...humain}
              // color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>

        {/* <div className="relative flex w-full rounded-lg justify-center mt-4" >

                  <Link href="/humains/new">
                              <button className=" p-8 flex items-center gap-4 rounded-full bg-black w-full text-white cursor-pointer">
                                  
                                      <p>Build custom Humain</p>
                                      <Image
                                                  src="/icons/plus.svg"
                                                  alt="duration"
                                                  width={25.5}
                                                  height={23.5}
                                                />
                                  
                              </button>
                              </Link>


                </div>


                <button className="bg-green-500">
                  Load More
                </button> */}
      </main>
    </section>
  );
};

export default HumainsLibrary;
