"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import React, { memo } from "react";

// Dynamically load client‑only widgets
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });
const LiveClock = dynamic(() => import("@/components/LiveClock"), { ssr: false });

// Memoized background video to avoid re‑renders
const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="relative w-full lg:h-[55%] h-[35%] z-40 custom-font lg:px-4">
      <video
        className="w-full h-full object-cover"
        src="/video/bg-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
      />
    </div>
  );
});

export default function Page() {
  return (
    <>
      <Head>
        {/* Preload the video to warm up the cache */}
        <link
          rel="preload"
          as="video"
          href="/video/bg-vid.mp4"
          type="video/mp4"
        />
      </Head>

      <section className="relative w-full h-screen overflow-hidden bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(204,204,204,1)_65%,rgba(242,242,242,1)_100%)]">
        <section className="relative w-full h-full flex flex-col-reverse justify-between bg-[#030003]">
          {/* Section 1: Text + CTA */}
          <div className="relative w-full lg:h-[45%] h-[65%] lg:px-[3%] px-[9%] pb-4 text-white flex flex-col pt-10 items-start custom-font lg:mb-2 mb-2">
            <span className="absolute top-2 right-3 lg:text-3xl opacity-30">
              humain.ai
            </span>

            <div className="h-full w-full flex justify-between max-sm:flex-col max-sm:py-5">
              <div>
                <h1 className="lg:text-7xl">
                  AI Agents for <br />
                  Smarter and Faster <br /> Learning
                </h1>
                <p className="lg:text-lg text-sm opacity-60 mt-6 tracking-[0.05em]">
                  Engage in real‑time, interactive sessions Powered by GPT‑4o,
                  personalized to your individual pace and learning style.
                </p>
              </div>

              <div className="flex lg:flex-col lg:justify-end justify-center">
                <CTA />
              </div>
            </div>

            <div className="w-full lg:mt-12 border-t border-t-[#c2c2c2] pt-5 opacity-50 text-sm lg:text-lg">
              2025
            </div>

            <div className="absolute bottom-1 right-0">
              <LiveClock />
            </div>
          </div>

          {/* Section 2: Background Video */}
          <BackgroundVideo />
        </section>
      </section>
    </>
  );
}
