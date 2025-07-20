"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function BuildHumainButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Warm up the /humains/new route bundle when the user hovers
  const prefetch = () => {
    router.prefetch("/humains/new");
  };

  const go = () => {
    setLoading(true);
    // No await, so the spinner renders before navigating
    router.push("/humains/new");
  };

  return (
    <button
      onMouseEnter={prefetch}
      onClick={go}
      disabled={loading}
      className="p-4 flex items-center w-[200px] gap-4 rounded-full bg-black justify-center text-white cursor-pointer"
    >
      {loading ? (
        <svg
          className="h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        <>
          <p>Build Humain</p>
          <Image
                              src="/icons/plus.svg"
                              alt="duration"
                              width={18.5}
                              height={18.5}
                            />
        </>
      )}
    </button>
  );
}
