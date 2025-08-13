import { VolumeData } from "@/types/global";
import Link from "next/link";

export default function Volume({ volumeData }: { volumeData: VolumeData }) {
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
        </>
    )
}