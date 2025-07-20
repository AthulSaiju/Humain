"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface HumainCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}

export default function HumainCard({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: HumainCardProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

   const handleLaunch = () => {
    setLoading(true);

    startTransition(() => {
      router.push(`/humains/${id}`);
    });
  };

  return (
    <article
      className="companion-card bg-[#ffffff] z-10"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

        <button
      onClick={handleLaunch}
      disabled={loading || isPending}
      className="btn-primary w-full justify-center flex items-center gap-2"
    >
      {(loading || isPending) ? (
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
        "Launch Session"
      )}
    </button>
    </article>
  );
}
