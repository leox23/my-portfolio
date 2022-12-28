import { Social } from "../typings";

export const fetchSocials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log("🚀 ~ file: fetchSocials.ts:8 ~ fetchSocials ~ socials", socials)
    console.log(socials);
    return socials;
}