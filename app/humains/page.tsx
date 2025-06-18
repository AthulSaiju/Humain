import { getAllHumains } from "@/lib/actions/humain.actions";
import HumainCard from "@/components/HumainCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";

const HumainsLibrary = async ({ searchParams }: SearchParams) => {

    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    const humains = await getAllHumains({ subject,topic });
    

  return (


   <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput/>
                    <SubjectFilter/>
                </div>
            </section>
            <section className="companions-grid">
                {humains.map((humain) => (
                    <HumainCard
                        key={humain.id}
                        {...humain}
                        // color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
  )
}

export default HumainsLibrary