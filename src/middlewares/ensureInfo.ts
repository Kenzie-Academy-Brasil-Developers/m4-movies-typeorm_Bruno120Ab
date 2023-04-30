import { NextFunction, Request, Response } from "express";

import { ZodTypeAny } from "zod";

import { IMovieNoID } from "../interfaces/movies.interface";

const ensureBodyIsValidMiddleware = (schema: ZodTypeAny) => (req:Request, res:Response, next:NextFunction): void => {
     const Body: IMovieNoID = schema.parse(req.body);

     req.body = Body;

     return next();
}

export default ensureBodyIsValidMiddleware;