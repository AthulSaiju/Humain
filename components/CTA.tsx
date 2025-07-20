// import Image from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section w-fit ">
      <Link href="/humains">
        <button className="group flex items-center rounded-full cursor-pointer gap-1 px-1">
          {/* 1st child: flips to white bg + black text on hover */}
          <div
            className="lg:py-7 lg:px-16 py-6 px-12 rounded-full lg:text-2xl text-lg border-2 border-[#7f7f7f] text-white transition-colors duration-300 ease-in-out"
          >
            <p>Get Started</p>
          </div>

          {/* 2nd child: rotates 90° on hover */}
          <div
            className="
      bg-white lg:p-4.5 p-3 rounded-full 
      flex items-center justify-center

      transform transition-all duration-300 ease-in-out
      group-hover:rotate-45
            group-hover:translate-x-1

      
    "
          >
            <Image
              src="/icons/arrowd2.svg"
              alt="arrow"
              width={52.5}
              height={53.5}
            />
          </div>
        </button>
      </Link>

      {/* <Link href="/humains/new">
            <button className=" p-4 flex items-center gap-2 rounded-lg border-1 border-black text-black cursor-pointer">
                
                    <p>Contact Sales</p>
                
            </button>
            </Link> */}
    </section>
  );
};

export default CTA;
