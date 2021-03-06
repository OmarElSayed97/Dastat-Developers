import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Http } from '@angular/http';

@Injectable()
export class SearchService extends HttpService{

  constructor(public http: Http) {
    super(http);
   }

   getSearchResult(key: String){
     return this.get('search/' + key);
   }

}
