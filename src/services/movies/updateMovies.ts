import { Repository } from "typeorm";

import Movie from "../../entities/movies.entity";

import { AppDataSource } from "../../data-source";

async function updateMoviesService(movieData:Movie | undefined, Id:number): Promise<Movie>{
     const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie);

     const oldMovieData: Movie | null = await movieRepository.findOneBy({ id: Id});

     const newMovieData: Movie | null = movieRepository.create({
          ...oldMovieData,
          ...movieData
     })

     await movieRepository.save(newMovieData);

     return newMovieData;
}


export default updateMoviesService;
