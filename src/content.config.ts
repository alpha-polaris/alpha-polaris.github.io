import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('ガイド'),
    order: z.number().default(0),
    status: z.enum(['draft', 'published']).default('published'),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
});

export const collections = { docs };
