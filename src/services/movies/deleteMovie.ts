import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import Movie from "../../entities/movies.entity";

async function deleteMovieService(Id:number){
     const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie);

     await movieRepository.delete(Id);
}

export default deleteMovieService;