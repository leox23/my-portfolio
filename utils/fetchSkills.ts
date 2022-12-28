import { Skill } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;
    console.log("🚀 ~ file: fetchSkills.ts:8 ~ fetchSkills ~ skills", skills)

    return skills;

}