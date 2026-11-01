import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One row per desk.
const desks = defineCollection({
  loader: file('./src/content/desks.json'),
  schema: z.object({
    name: z.string(),
    blurb: z.string().optional(),
    order: z.number().int().positive(),
  }),
});

// One file per article.
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      deck: z.string(),
      standfirst: z.string().optional(),
      desk: reference('desks'),
      kicker: z.string().optional(),
      byline: z.array(reference('authors')).nonempty(),
      date: z.coerce.date(),
      hero: image(),
      heroAlt: z.string(),
      heroCaption: z.string().optional(),
      heroCredit: z.string(),
      heroFocus: z.enum(['left', 'center', 'right']).default('center'),
      format: z.enum(['report', 'photoessay', 'brief']).default('report'),
      featured: z.boolean().default(false),
      rail: z
        .array(
          z.discriminatedUnion('kind', [
            z.object({
              kind: z.literal('stat'),
              value: z.string(),
              label: z.string(),
              source: z.string().optional(),
            }),
            z.object({
              kind: z.literal('cta'),
              title: z.string(),
              coupon: z.string().optional(),
              href: z.string(),
              label: z.string(),
              note: z.string().optional(),
            }),
          ]),
        )
        .optional(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
    }),
});

// Bylines.
const authors = defineCollection({
  loader: file('./src/content/authors.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      order: z.number().int().positive().default(99),
      bio: z.string().optional(),
      portrait: image().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    }),
});

// Topic Cluster Pillar Hub collections (万字知识图谱与选型总览)
const pillars = defineCollection({
  loader: glob({ base: './src/content/pillars', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    deck: z.string(),
    desk: z.string().optional(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { desks, articles, authors, pillars };
