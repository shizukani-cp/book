import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './books'
  }),
  schema: z.object({
    title: z.string(),
    started: z.number(),
    finished: z.number().optional(),
    isbn: z.string(),
    status: z.enum([
      "finished",
      "reading",
      "dropped"
    ]),
  })
});

export const collections = {
  books
};
