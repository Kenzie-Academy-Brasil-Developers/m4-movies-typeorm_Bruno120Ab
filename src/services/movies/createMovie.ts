
import { Repository } from "typeorm";

import { AppDataSource } from "../../data-source";

import { Movie } from "../../entities";

async function createMovieService(movieData:Movie): Promise<Movie> {
     const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

     const movieCreate: Movie | null = movieRepository.create(movieData);

     await movieRepository.save(movieCreate);

     const returnMovie = movieCreate;

     return returnMovie;
};   

export default createMovieService;