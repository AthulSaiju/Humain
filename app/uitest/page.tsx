// app/humains/new/loading.tsx

import React from 'react';

export default function Uitest() {
  return (


     <section className="relative w-full min-h-screen bg-white p-4">
     {/* Decorative grid lines (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-px h-full bg-black opacity-20" style={{ left: "15%" }} />
        <div className="absolute w-px h-full bg-black opacity-20" style={{ left: "50%" }} />
        <div className="absolute w-px h-full bg-black opacity-20" style={{ right: "15%" }} />
        <div className="absolute h-px w-full bg-black opacity-20 top-[23%]" />
        <div className="absolute h-px w-full bg-black opacity-20" style={{ top: "90%" }} />
      </div>

      <main className="space-y-6 relative z-10 animate-pulse">
        {/* Header + controls */}
        <div className="flex items-center justify-between max-sm:flex-col gap-4">
          {/* Title skeleton */} 
          <div className="h-8 lg:w-1/3 w-2/3 bg-gray-300 rounded " />
          {/* Filters skeleton */}
          <div className="flex gap-4 items-center max-sm:flex-col">

            <div className='flex gap-3 max-sm:justify-center '>
            <div className="h-10 lg:w-50 w-35 bg-gray-200 rounded " />
            <div className="h-10 lg:w-40 w-35 bg-gray-200 rounded " />
            </div>

            <div className='max-sm:w-full flex justify-center'>
            <div className="h-10 w-42 bg-gray-200 rounded-full" />
            </div>

          </div>
        </div>

        {/* Grid of card skeletons */}
        <div className="companions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-14">
          {Array.from({ length: 9 }).map((_, i) => (
            <article key={i} className="companion-card border-none bg-gray-100 p-4 space-y-1 ">
              {/* Badge & bookmark */}
              <div className="flex justify-between items-center">
                <div className="h-6 w-20 bg-gray-300 rounded " />
                <div className="h-6 w-6 bg-gray-300 rounded " />
              </div>
              {/* Title */}
              <div className="h-6 w-1/2 bg-gray-200 rounded " />
              {/* Topic */}
              <div className="h-4 w-3/4 bg-gray-200 rounded " />
              {/* Duration */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-200 rounded " />
                <div className="h-4 w-12 bg-gray-200 rounded " />
              </div>
              {/* Button */}
              <div className="h-10 w-full bg-gray-300 rounded-lg " />
            </article>
          ))}
        </div>
      </main>
    </section>

  )
}
