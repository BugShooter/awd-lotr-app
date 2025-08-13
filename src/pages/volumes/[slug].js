import { useRouter } from "next/router";
import Volume from "@/components/Volume";
import { volumes } from "../../lib/data";

export default function Page() {
    const router = useRouter();
    const { slug } = router.query;
    const volume = volumes.find(v => v.slug === slug);
    return volume ? (<Volume volumeData={volume} />) : (<>Not found</>)
}
