// app/humains/new/loading.tsx

import React from 'react';

export default function JourneyLoading() {
  return (
<section className=' w-full min-h-screen bg-white  flex justify-center items-center '>

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


    <section className="lg:w-[73%] w-full lg:p-8  space-y-6 animate-pulse lg:mt-4 mt-[15vh]">
      {/* Header Card */}
      

      <section className="w-full relative z-10 max-sm:gap-2 mx-auto lg:space-y-6 space-y-2 px-4">
        {/* Header section */}
        <section className="flex justify-between gap-4 max-sm:flex-col lg:p-2 lg:px-4 py-6 items-center bg-gray-200 rounded-xl">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-28 w-28 bg-gray-300 rounded-full" />
            <div className="space-y-2">
              <div className="h-6 w-40 bg-gray-300 rounded" />
              <div className="h-4 w-56 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex gap-4 items-center">
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col gap-2">
              <div className="h-6 w-24 bg-gray-300 rounded" />
              <div className="h-4 w-32 bg-gray-300 rounded" />
            </div>
            <div className="bg-gray-300 rounded-2xl p-4 flex flex-col gap-2">
              <div className="h-6 w-24 bg-gray-100 rounded" />
              <div className="h-4 w-32 bg-gray-100 rounded" />
            </div>
          </div>
        </section>

        {/* Accordion section */}
        <section className="bg-gray-100 lg:p-8 px-4 py-8 lg:rounded-4xl rounded-xl space-y-4">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="bg-gray-300 rounded-2xl p-6 space-y-4">
              {/* Accordion title bar */}
              <div className="h-6 w-1/3 bg-gray-200 rounded" />

              {/* Exactly four skeleton lines */}
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>
            </div>
          ))}

        </section>
      </section>
    </section>

    
    </section>
  )
}
