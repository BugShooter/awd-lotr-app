import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../lib/data";

export default function Volumes() {
  const router = useRouter();
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        {volumes.map(volume => {
          return (
            <li key={volume.slug} className="mb-2 tracking-[-.01em]">
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          )
        })}
      </ul>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#3866] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          onClick={()=>{
            const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
            router.push(`/volumes/${randomVolume.slug}`);
          }}
          >Random volume</button>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
      </div>
    </>
  );
}
