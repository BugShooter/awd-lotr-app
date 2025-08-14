"use client";

import { volumes } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function RandomVolumeButton() {
  const router = useRouter();

  return (
    <button
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#3866] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      onClick={() => {
        const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
        router.push(`/volumes/${randomVolume.slug}`);
      }}
    >Random volume</button>
  )
}
