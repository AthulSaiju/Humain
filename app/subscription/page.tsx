import React from "react";
import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
  return (
    <section className=" w-full min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)] ">
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* vertical lines */}
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ left: "15%" }}
        />
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ left: "49.4%" }}
        />
        <div
          className="absolute w-px h-full bg-black opacity-20"
          style={{ left: "85%" }}
        />

        {/* horizontal lines */}
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "30%" }}
        />
        <div
          className="absolute h-px w-full bg-black opacity-20"
          style={{ top: "65%" }}
        />
      </div>
      <div className="font-bold lg:text-9xl lg:mt-5 text-8xl opacity-10 lg:-translate-y-24 flex-wrap max-w-full overflow-clip mt-[10vh]">
        Plans and Pricing
      </div>
      <div className="lg:w-2/3 z-20 w-full px-8">
        <PricingTable />
      </div>
    </section>
  );
};

export default Subscription;
