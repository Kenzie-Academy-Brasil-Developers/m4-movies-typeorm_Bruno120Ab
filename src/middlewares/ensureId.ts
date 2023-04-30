import Movie from "../entities/movies.entity";

import { NextFunction, Request, Response } from "express";

import { Repository } from "typeorm";

import { AppDataSource } from "../data-source";

import { AppError } from "../errors";

const ensureIdMiddleware = async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const Id:number = parseInt(req.params.id);

     const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie);

     const movie: Movie | null = await movieRepository.findOne({
          where: {
               id: Id,
          }
     })

     if(!movie){
          throw new AppError("Movie not found", 404)
     }
          
     return next()
}

export default ensureIdMiddleware;

