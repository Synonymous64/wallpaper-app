import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'y5r6lfpi',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-03-17'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export const getCategory = async () => {
    const items = await client.fetch('*[_type == "category"]').then(data => { return data });
    return items;
};

