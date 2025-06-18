import CTA from '@/components/CTA'
import HumainCard from '@/components/HumainCard'
import HumainsList from '@/components/HumainsList'
import { getAllHumains, getRecentSessions } from '@/lib/actions/humain.actions'
import React from 'react'



const Page = async () => {

  const humains = await getAllHumains({limit: 4});
  const recentSessionHumains = await getRecentSessions(10);


  return (
    <main>
      <h1>TOP HUMAINS</h1>


      <section className="home-section">
        {humains.map((humain) => (
        <HumainCard
        key={humain.id}
        {...humain}
        />
        ))}

      </section>

      <section className="home-section">

        <HumainsList
        title='Recent Sessions'
        humains={recentSessionHumains}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
        
      </section>




    </main>
  )
}

export default Page