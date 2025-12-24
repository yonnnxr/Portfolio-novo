import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    name: z.string(),
    thumbnail: image(),
    date: z.coerce.date(),
    featured: z.boolean().optional(),

    video: z.string().optional(),

    mainTags: z.array(z.string()).optional(),

    aspect: z.string().optional(),

    shortDescription: z.string().optional(),

    images: z.array(image()).optional(),
    tags: z.array(z.string()).optional(),

    projectUrl: z.string().optional(),
    codeUrl: z.string().optional(),

    demo: z.string().optional(),
    iframe: z.string().optional(),

    projectLayout: z.enum(['grid', 'full', 'carousel', 'tiered']).optional(),
  }),
});

export const collections = { projects };
