import { Repository } from "typeorm";

import { Movie } from "../../entities";

import { AppDataSource } from "../../data-source";

async function readMoviesService( sort:string |  undefined, order:string |  undefined, page: number | undefined , perPage: number | undefined ): Promise<{
    prevPage: string | null;
    nextPage: string | null;
    count: number;
    data: {};
}>
{
    const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
    const count = await userRepository.count()

    let take = 5
    let skip = 1
    let orderBy = {} 

    if(sort === 'price'){
            orderBy = { price: `${order}`}
    }else if(sort === 'duration'){
            orderBy = { duration: `${order}`}
    }else{
        orderBy = { id: `asc`}
    }


    if( perPage ){
        take = perPage >= 5  || perPage < 1 ? 5 : perPage;
    }
    
    if( page ){
        skip = page < 1 ? 1 : page;
    }

    const next = skip + 1;
    const prev = skip - 1;

    const nextPage = next > count || next === 5 || take * skip > count ? null : `http://localhost:3000/movies?page=${next}&perPage=${take}`;
    const prevPage = prev < 1 ? null : `http://localhost:3000/movies?page=${prev}&perPage=${take}`;

    let data = {}

    let movies: Movie[] | undefined;

    if(!page || !perPage){
        movies = await userRepository.find({
                skip: (skip - 1) * take,
                take,
                order: orderBy
                
        })
        data = movies
    }else{
        movies = await userRepository.find({
            skip: (skip - 1) * take,
            take,
            order: orderBy
        })
        data = movies
    }
  
    return {
        prevPage,
        nextPage, 
        count,
        data
    }
 }
 
 export default readMoviesService;