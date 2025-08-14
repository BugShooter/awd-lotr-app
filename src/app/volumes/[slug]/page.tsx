"use client";

import { notFound, useParams } from 'next/navigation';
import Volume from "@/components/Volume";
import { volumes } from "@/lib/data";

export default function Page() {
  const params = useParams();
  const { slug } = params;
  const volume = volumes.find(v => v.slug === slug);
  if (!volume) {
    notFound();
  }
  return (<Volume volumeData={volume} />);
}
