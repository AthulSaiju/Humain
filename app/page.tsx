import CTA from '@/components/CTA'
// import HumainCard from '@/components/HumainCard'
// import HumainCardSmall from '@/components/HumainCardSmall'
// import HumainsList from '@/components/HumainsList'
// import { getAllHumains, getRecentSessions } from '@/lib/actions/humain.actions'
import React from 'react'
import LiveClock from '@/components/LiveClock'




const Page = () => {

  // const humains = await getAllHumains({limit: 4});
  // const recentSessionHumains = await getRecentSessions(10);


  return (
    <section className='relative w-full h-screen overflow-hidden   bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)]'>

      {/* <div className='w-full h-[50vh]   absolute top-0 left-0 z-40'>
         <video
    className="w-full h-full object-cover"
    src="/video/bg-vid.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
      </div> */}

      

    
       
{/* <main className="relative w-full h-full max-w-none bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)]"></main> */}
     <section className=" relative w-full h-full max-w-none flex flex-col-reverse justify-between bg-[#030003]">

      


      {/* ------------------------------------------Section-1-------------------------------------------- */}

      <div className='relative w-full lg:h-[45%] h-[70%] lg:px-[3%] px-[9%]  justify-between pb-4 text-white flex  flex-col pt-10  items-start custom-font'>

        <span className='absolute top-2 right-3 lg:text-3xl opacity-30'>humain.ai</span>

        <div className=' h-full w-full flex justify-between max-sm:flex-col max-sm:py-5'>
          <div>

        <h1 className='lg:text-7xl'> AI Agents for  <br />Smarter and Faster <br /> Learning </h1>
        <p className='text-lg   opacity-60 mt-6 tracking-[0.05em]'>Engage in real‑time, interactive sessions Powered by GPT‑4o, personalized to your individual pace and learning style.</p>

</div>

      <div className=' flex flex-col justify-end '>

        <div className='h-fit flex justify-center'>
          <CTA/>
        </div>

      </div>

</div>

 {/* <div className="w-fit p-4 custom-font flex items-center justify-center gap-6 rounded-lg">
  
  <div className="flex flex-col items-center">
    <h1 className="text-5xl font-bold text-orange-500">220+</h1>
    <p className="text-sm ">Humains Created</p>
  </div>

  
  <div className="flex flex-col  items-center">
    <h1 className="text-5xl font-bold opacity-70">55K+</h1>
    <p className="text-sm opacity-60">Minutes of Conversations</p>
  </div>

  <div className="flex flex-col  items-center">
    <h1 className="text-5xl font-bold opacity-70">10K+</h1>
    <p className="text-sm ">Users Globally</p>
  </div>


</div> */}

        {/* <div className='h-fit'>
          <CTA/>
        </div> */}

        <div className=' w-full lg:mt-12 border-t-1 pt-5 opacity-50 border-t-[#c2c2c2]'>2025</div>

        <div className=' absolute bottom-0 right-0'>
          <LiveClock />
        </div>

      </div>

       {/* ------------------------------------------Section-2-------------------------------------------- */}

      <div className='relative w-full lg:h-[55%] h-[30%]  z-40 custom-font lg:px-4'>

        {/* <div
    className="
      absolute
      inset-0           
      flex
      items-end      
      justify-start  
      font-bold
      text-2xl 
      ml-18
      mb-18 
      
    "
  >
   <p>Samrter and for <br />Faster agj dhedue jdhc<br /> and Cheaper dcbgidg digc ugdcgu</p>
  </div> */}


  
        {/* <div className='w-full h-6 flex justify-between '>

          <span className='text-4xl -mt-3'>+</span>
          <span className='text-4xl -mt-3'>+</span>
          <span  className='text-4xl -mt-3'>humain.ai</span>

        </div> */}
         <video
    className="w-full h-full object-cover"
    src="/video/bg-vid.mp4"
    autoPlay
     loop
    muted
    playsInline
  />
      </div>








  {/* ----------------------------------Second new UI------------------------------------------- */}


    








    </section>
    </section>
  )
}

export default Page