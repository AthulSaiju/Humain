import CTA from '@/components/CTA'
import HumainCard from '@/components/HumainCard'
import HumainsList from '@/components/HumainsList'
import { recentSessions } from '@/constants'
import React from 'react'



const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>TOP HUMAINS</h1>


      <section className="home-section">
        <HumainCard
        id='1'
        name='Humain 1'
        topic='Topic 1'
        subject='Math'
        duration={30}
        color='white'
        bookmarked={false}
        />


        <HumainCard
        id='2'
        name='Humain 2'
        topic='Topic 2'
        subject='Science'
        duration={45}
        color='white'
        bookmarked={true}
        />

        
        <HumainCard
        id='3'
        name='Humain 3'
        topic='Topic 3'
        subject='History'
        duration={60}
        color='white'
        bookmarked={false}
        />


       <HumainCard
        id='4'
        name='Humain 4'
        topic='Topic 4'
        subject='Language'
        duration={50}
        color='white'
        bookmarked={true}
        />
      </section>

      <section className="home-section">

        <HumainsList
        title='Recent Sessions'
        humains={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
        
      </section>




    </main>
  )
}

export default Page