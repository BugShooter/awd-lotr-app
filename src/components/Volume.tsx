import { VolumeData } from "@/types/global";
import Link from "next/link";
import { volumes } from "../lib/data";


export default function Volume({ volumeData }: { volumeData: VolumeData }) {
    const volumeIndex = volumes.findIndex(v => v.slug === volumeData.slug);
    const prevVolume = volumeIndex > 0 ? volumes[volumeIndex - 1] : null;
    const nextVolume = volumeIndex !== -1 && volumeIndex < volumes.length - 1 ? volumes[volumeIndex + 1] : null;

    return (
        <>
            <Link href="/volumes">← All Volumes</Link>
            <h1>{volumeData?.title}</h1>
            <p>{volumeData?.description}</p>
            <ul>
                {volumeData?.books.map(book => (
                    <li key={book.ordinal}>{book?.ordinal}: {book?.title}</li>
                ))}
            </ul >
            <nav className="flex gap-4 items-center flex-row">
                {prevVolume && (<Link href={prevVolume.slug}>← Prev</Link>)}
                {nextVolume && (<Link href={nextVolume.slug}>Next →</Link>)}
            </nav>
        </>
    )
}