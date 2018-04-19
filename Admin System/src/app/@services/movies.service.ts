import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpService } from './http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Time } from '@angular/common';

@Injectable()
export class MoviesService extends HttpService {

  constructor(public cookie: CookieService, public http: Http) {
    super(cookie, http);
   }
    /**
    * Sends get request to get the data from MyMovies backend:
    *
    * @returns Array of JSON objects of MyMovies data
    */

    viewAllMovies(){
      return this.get('viewMovie/viewAllMovies');
    }

    addMoviess(title: string, duration: number, genre: string, description: string,imagePath: string,cast: string,
      year: number, feature: number, release_date:Date,rating: number,status: string,admin_requested: string ){

        return this.post('addMovies/:admin_requested',{
          "title": title,
          "duration":duration,
          "genre":genre,
          "description":description,
          "imagePath":imagePath,
          "cast":cast,
          "year":year,
          "feature":feature,
          "release_date":release_date,
          "status":status,
          "admin_requested":admin_requested
        })
    } 


    deleteMovie(movie_id:number){
      return this.post('/movie/delete/'+ movie_id);
        }
}
