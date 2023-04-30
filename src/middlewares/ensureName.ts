import Movie from "../entities/movies.entity";

import { NextFunction, Request, Response } from "express";

import { AppDataSource } from "../data-source";

import { Repository } from "typeorm";

import { AppError } from "../errors";

const ensureNameMiddleware =  async (req:Request, res:Response, next:NextFunction): Promise<void> => { 
     const { body:Body } = req;

     if(Body.name){
          const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie);

          const movie = await movieRepository.findOneBy({ name: Body.name});     

          if(movie){
               throw new AppError("Movie already exists.", 409 )
          }
     }
     
          
     return next()
}

export default ensureNameMiddleware;


