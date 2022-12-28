import { Project } from "../typings";

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    console.log("🚀 ~ file: fetchProjects.ts:8 ~ fetchProjects ~ projects", projects)

    return projects;
}