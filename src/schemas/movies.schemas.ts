import { z } from 'zod';

const movieSchema = z.object({
     id: z.number(),
     name: z.string().max(50),
     description: z.string().nullish(),
     duration: z.number().positive(),
     price: z.number().int(),
});

const movieSchemaNoId = movieSchema.omit({id: true});

const updateMovieSchema = movieSchemaNoId.partial();

export {
     movieSchema,
     movieSchemaNoId,
     updateMovieSchema,
}