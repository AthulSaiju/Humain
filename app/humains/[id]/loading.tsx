// app/humains/loading.tsx
export default function HumainsIdLoading() {
  return (

   <section className=' w-full min-h-screen bg-white max-sm:px-4 flex justify-center items-center '>
    <section className="lg:w-[73%] w-[90%] lg:p-8  space-y-6 animate-pulse lg:mt-[10vh] mt-[20vh] ">
      {/* Header Card */}
      <article className="flex rounded-2xl lg:justify-between  max-sm:h-[200px] p-6 flex-wrap bg-gray-200 mb-4 max-sm:flex-col">
        <div className="flex max-sm:h-1/3 max-sm:mb-2 items-center gap-4 bg-gray-200">
          {/* icon */}
          <div className="h-9 w-9 bg-gray-300 rounded max-md:hidden" />
          <div className="space-y-2">
            {/* name */}
            <div className="h-6 w-40 bg-gray-300 rounded" />
            {/* subject badge */}
            <div className="h-5 w-20 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="flex max-sm:h-1/2 items-center gap-2 bg-gray-300">
          {/* clock */}
          <div className="h-4 w-4 bg-gray-300 rounded" />
          <div className="h-4 w-8 bg-gray-300 rounded" />
        </div>
      </article>

      {/* Main HumainComponent area */}
      <div className="flex gap-6 max-sm:flex-col">
        {/* Left: companion avatar + lottie */}
        <div className="flex-1 bg-gray-200 rounded-2xl lg:h-[550px] relative overflow-hidden max-sm:hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-72 w-48 bg-gray-300 rounded-lg" />
          </div>
          <div className="absolute bottom-0 w-full h-16 bg-gray-300 opacity-60" />
        </div>

        {/* Right: transcript */}
        <div className="flex-1 space-y-4">
          <div className="lg:h-[550px] h-[400px] bg-gray-200 rounded-2xl p-4 overflow-hidden">
            <div className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`h-4 w-${Math.floor(Math.random()*30+50)}% bg-gray-300 rounded`} />
              ))}
            </div>
          </div>

          {/* Controls row */}
          
        </div>
      </div>
      <div className="flex gap-4">
            {/* mic button */}
            <div className="h-13 w-13 bg-gray-300 rounded-full" />
            {/* action button */}
            <div className="flex-1 h-12 bg-gray-300 rounded-3xl" />
          </div>
    </section>

    
    </section>









  );
}
