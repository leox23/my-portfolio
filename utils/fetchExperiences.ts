import { Experience } from "../typings";

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    console.log("🚀 ~ file: fetchExperiences.ts:8 ~ fetchExperiences ~ experiences", experiences)

    return experiences;
}