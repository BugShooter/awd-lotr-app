import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 text-center p-4 gap-4'>
      <h1>He has stolen our treasure!</h1>
      <p className="text-lg">The page is not found.</p>
      <Image
        src="/images/gollum.jpg"
        alt="Gollum"
        width={200}
        height={300}
        className="rounded-lg shadow-lg mx-auto mb-4"
      />
      <p>Gollum has taken what is rightfully ours!</p>
      <Link href="/" className="text-black-500 hover:underline">← Return Home</Link>
    </div>
  );
}
