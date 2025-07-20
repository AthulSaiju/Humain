import { getAllHumains } from "@/lib/actions/humain.actions";
import HumainCard from "@/components/HumainCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

 import BuildHumainButton from "@/components/BuildHumainButton";



const HumainsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const humains = await getAllHumains({ subject, topic, limit: 9 });

  return (
    <section className="relative w-full pb-[5vh] bg-white">
      <div className="fixed inset-0 pointer-events-none">
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
          style={{ top: "90%" }}
        />
      </div>

      <main className="">
        <section className="flex items-center justify-between gap-4 max-sm:flex-col">
          <h1>Featured Humains</h1>
          <div className="flex lg:max-w-2/3 gap-4 items-center">
            <SearchInput />
            <SubjectFilter />

            <div className="relative flex w-full rounded-lg justify-center  max-sm:hidden">
              
              <BuildHumainButton/>
            </div>
          </div>
        </section>

        <div className="relative lg:hidden flex w-full rounded-lg justify-center ">
          <BuildHumainButton/>
        </div>

        <section className="companions-grid lg:px-4 lg:mt-6 mt:2 max-sm:mb-4 px-4">
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
