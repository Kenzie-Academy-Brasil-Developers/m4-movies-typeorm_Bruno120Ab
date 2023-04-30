import { Request, Response } from "express";

import { Movie } from "../entities";

import readMoviesService from "../services/movies/readMovies";
import deleteMovieService from "../services/movies/deleteMovie";
import createMovieService from "../services/movies/createMovie";
import updateMoviesService from "../services/movies/updateMovies";

async function createMoviesController(req:Request, res: Response): Promise<Response>{
     const movieData: Movie = req.body;

     const newMovie: Movie | null = await createMovieService(movieData);

     return res.status(201).json(newMovie)
}

async function readMoviesController(req: Request, res: Response): Promise<Response>{
     const sort: string |  undefined = req.query.sort?.toString();
     const order: string |  undefined = req.query.order?.toString();

     const page: number | undefined = Number(req.query.page);
     const perPage: number | undefined = Number(req.query.perPage);

     const movies = await readMoviesService(sort, order, page, perPage);

     return res.status(200).json(movies);
}

async function deleteMoviesController(req:Request, res: Response): Promise<Response>{
     const Id:number = parseInt(req.params.id);

     await deleteMovieService(Id)

     return res.status(204 ).send();
}

async function updateMovieController(req:Request, res: Response): Promise<Response>{
     const movieData:Movie = req.body;
     const Id:number = parseInt(req.params.id);

     const newMovieData: Movie = await updateMoviesService(movieData, Id);

     return res.status(200).json(newMovieData);
}

export {
     createMoviesController,
     readMoviesController,
     updateMovieController,
     deleteMoviesController,
};