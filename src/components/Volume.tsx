"use client";

import Link from "next/link";
import Image from "next/image";
import { VolumeData } from "@/types/global";
import { volumes } from "@/lib/data";

export default function Volume({ volumeData }: { volumeData: VolumeData }) {
    const volumeIndex = volumes.findIndex(v => v.slug === volumeData.slug);
    const prevVolume = volumeIndex > 0 ? volumes[volumeIndex - 1] : null;
    const nextVolume = volumeIndex !== -1 && volumeIndex < volumes.length - 1 ? volumes[volumeIndex + 1] : null;

    return (
        <>
            <div className="flex flex-col sm:flex-row-reverse gap-8 items-center sm:items-start sm:items-stretch">
                <Image
                    src={volumeData.cover}
                    alt={volumeData.title}
                    width={140}
                    height={230}
                />
                <div className="flex-1 w-full flex flex-col gap-4">
                    <Link href="/volumes" className="mb-4 inline-block">← All Volumes</Link>
                    <h1>{volumeData?.title}</h1>
                    <p>{volumeData?.description}</p>
                    <ul>
                        {volumeData?.books.map(book => (
                            <li key={book.ordinal}>{book?.ordinal}: {book?.title}</li>
                        ))}
                    </ul >
                    <nav className="flex gap-4 items-center flex-row mt-auto">
                        {prevVolume && (<Link href={prevVolume.slug}>← Prev</Link>)}
                        {nextVolume && (<Link href={nextVolume.slug}>Next →</Link>)}
                    </nav>
                </div>
            </div>
        </>
    )
}