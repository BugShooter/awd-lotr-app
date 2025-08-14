import Link from "next/link";
import { introduction, volumes } from "@/lib/data";
import RandomVolumeButton from "./randomVolumeButton";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        {volumes.map(volume => {
          return (
            <li key={volume.slug} className="mb-2 tracking-[-.01em]">
              <Link
                href={`/volumes/${volume.slug}`}
                className="hover:underline hover:underline-offset-4"
              >{volume.title}</Link>
            </li>
          )
        })}
      </ul>

      <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
        <RandomVolumeButton />
      </div>
    </>
  );
}
