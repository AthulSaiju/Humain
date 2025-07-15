import React from 'react'

import Image from "next/image";
import Link from "next/link";

interface HumainCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  
}

const HumainCardSmall = ({
  id,
  name,
  topic,
  duration,
  
}: HumainCardProps) => {


  return (
     <article
  className="flex flex-col rounded-full border-none text-white glass2 px-4 py-4 mb-4 gap-4 w-full min-lg:max-w-[410px] justify-between transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
  
>
  {/* top row: image+text on left, badge on right */}
  <div className="relative flex justify-between rounded-4xl">
    {/* image + name/topic/duration */}
    <div className="flex items-start gap-4">
      {/* image container */}
      <div className="w-16 h-19 overflow-hidden rounded-full">
        {/* replace with your Image component */}
        <Image
          src="/images/humain1.jpeg"
          alt={name}
          width={74}
          height={74}
          className="object-cover object-center"
        />
      </div>

      {/* text group */}
      <div className="flex flex-col">
        <h2 className="text-2xl">{name}</h2>

        
        <p className="text-sm mt-1">{topic}</p>




        <div className="flex items-center gap-2 ">
          <Image
            src="/icons/clock2.svg"
            alt="duration"
            width={13.5}
            height={13.5}
          />
          <p className="text-sm">{duration}m</p>
        </div>
      </div>
    </div>


    {/* subject badge */}

    

    <div className="flex  items-center">
       

         <div className="flex justify-end">
    <Link href={`/humains/${id}`}>
      <button className="btn-primary bg-black-100 rounded-full w-19 h-19  flex items-center justify-center ">
        <Image
            src="/icons/arrow.png"
            alt="launch"
            width={50.5}
            height={50.5}
            style={{opacity:0.4}}
          />
      </button>
    </Link>
  </div>
        
       </div>

     {/* <div className="flex justify-end">
    <Link href={`/humains/${id}`}>
      <button className="btn-primary">
        Launch
      </button>
    </Link>
  </div> */}
  





  </div>

  {/* bottom row: launch button right-aligned */}
  {/* <div className="mt-4 flex justify-end">
    <Link href={`/humains/${id}`}>
      <button className="btn-primary">
        Launch
      </button>
    </Link>
  </div> */}
</article>
   );
 };

export default HumainCardSmall