import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      dateCompletion: z.date(),
      dateCreated: z.date(),
      description: z.string(),
      cover: z.object({
        image: image(),
        alt: z.string(),
      }),
      features: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          }),
        )
        .optional(),
      tags: z
        .array(
          z.object({
            name: z.string(),
          }),
        )
        .optional(),
    }),
});

export const collections = {
  projects,
};
