import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: '5squqst8',
    dataset: 'production',
    apiVersion: '2023-04-19',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
});


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);