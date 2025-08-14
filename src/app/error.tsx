// app/error.tsx
"use client";
import Link from 'next/link'
import Image from "next/image";

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 text-center p-4 gap-4'>
      <h1>Darkness has fallen!</h1>
      <p>We encountered an error while processing your request.</p>
      <Image
        src="/images/sauron.jpg"
        alt="Sauron"
        width={300}
        height={300}
        className="rounded-lg shadow-lg mx-auto mb-4"
      />
      <p className="text-lg">The forces of darkness have interfered with our plans.</p>
      <Link href="/" className="text-black-500 hover:underline">← Return Home</Link>
    </div>
  );
}
