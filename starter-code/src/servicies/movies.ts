import { Injectable } from '@angular/core';
import  movies  from '../sample-movies'

@Injectable()
export class Movie {

    movies: Array<Object> = movies

    constructor() {
    this.movies = movies
  }

    getmovies(){
      console.log(movies)
    }

    getmovie(id){
      return this.movies.filter( (movie) => {
       if( movie["id"] === id){
        return movie;
       }
     })
    }
  }
