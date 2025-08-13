import Volume from "@/components/Volume";
import { volumes } from "../lib/data";

// get current file name without extension
const slug = __filename.split('/').pop()?.replace('.tsx', '');
const volume = volumes.find(v => v.slug === slug);

export default function Page() {
    return volume ? (<Volume volumeData={volume} />) : (<>Not found</>)
}
