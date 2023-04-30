import { Router } from 'express';

import { createMoviesController, deleteMoviesController, readMoviesController, updateMovieController } from '../controllers/movies.controllers';

import { movieSchemaNoId, updateMovieSchema } from '../schemas/movies.schemas';

import ensureNameMiddleware from '../middlewares/ensureName';
import ensureBodyIsValidMiddleware from '../middlewares/ensureInfo';
import ensureIdMiddleware from '../middlewares/ensureId';

const moviesRoutes: Router = Router();

moviesRoutes.post('', 
     ensureBodyIsValidMiddleware(movieSchemaNoId),   
     ensureNameMiddleware,     
     createMoviesController);

moviesRoutes.get ('',readMoviesController);

moviesRoutes.patch('/:id', 
     ensureIdMiddleware, 
     ensureNameMiddleware, 
     ensureBodyIsValidMiddleware(updateMovieSchema), 
     updateMovieController); 
     
moviesRoutes.delete('/:id',  
     ensureIdMiddleware,  
     deleteMoviesController);

export default moviesRoutes;





