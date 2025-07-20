// app/humains/new/loading.tsx

export default function HumainFormLoading() {
  return (
   <section className=' w-full min-h-screen bg-white max-sm:px-4 flex justify-center items-center'>

    <div className="absolute inset-0 pointer-events-none z-40">
    {/* vertical lines */}
    <div
      className="absolute w-px h-full bg-black opacity-20 max-sm:hidden"
      style={{ left: "30.4%" }}
    />
    {/* <div
      className="absolute w-px h-full bg-black opacity-20"
      style={{ left: "50%" }}
    /> */}
    <div
      className="absolute w-px h-full bg-black opacity-20 max-sm:hidden"
      style={{ right: "30.4%" }}
    />

    {/* horizontal lines */}
    <div
      className="absolute h-px w-full bg-black opacity-20"
      style={{ top: "8%" }}
    />
    <div
      className="absolute h-px w-full bg-black opacity-20 "
      style={{ bottom: "11%" }}
    />


  </div>

    

    <div className="space-y-8 p-6 animate-pulse min-lg:w-1/3 w-[90%] max-sm:mt-[10vh] items-center justify-center">
      {/* Humain Name */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/4" /> {/* label */}
        <div className="h-10 bg-gray-200 rounded" />       {/* input */}
      </div>

      {/* Subject Select */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/4" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>

      {/* Topic Textarea */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-24 bg-gray-200 rounded" />
      </div>

      {/* Voice Select */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/5" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>

      {/* Style Select */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/6" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>

      {/* Duration Input */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-1/3" />
        <div className="h-10 bg-gray-200 rounded" />
      </div>

      {/* Submit Button */}
      <div className="h-12 bg-gray-200 rounded w-full" />
    </div>
    </section>
  )
}
