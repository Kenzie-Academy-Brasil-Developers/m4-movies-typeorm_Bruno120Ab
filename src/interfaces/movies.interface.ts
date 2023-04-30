import { z } from 'zod';

import { movieSchema, movieSchemaNoId } from '../schemas/movies.schemas';

type IMovieRequest = z.infer<typeof movieSchema>;
type IMovieNoID = z.infer<typeof movieSchemaNoId>;

type IMovieUp = Partial<IMovieNoID>;


export {
     IMovieRequest,
     IMovieNoID,
     IMovieUp     
}