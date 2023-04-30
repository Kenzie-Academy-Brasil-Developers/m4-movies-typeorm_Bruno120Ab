import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

 @Entity('Movies')
 class Movie {
     @PrimaryGeneratedColumn('increment')
     id: number
 
     @Column({  type: 'varchar', length: 50, unique: true })
     name: string
 
     @Column({  type: 'text', nullable:true })
     description?: string
 
     @Column({  type: "int" })
     duration: number

     @Column({  type: "int"})
     price: number
}

export default Movie;
