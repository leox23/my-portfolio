import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.SANITY_API_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.SANITY_API_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: "2021-03-25",
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: process.env.NODE_ENV !== "production"
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);