import { Injectable } from '@angular/core';

import { Comic } from './comic';
import { COMICS } from './mock-comic';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { strictEqual } from 'assert';


const dbUrl = 'http://127.0.0.1:5000/comics/';

@Injectable({
  providedIn: 'root'
})
export class ComicService {




  constructor(private http: HttpClient) { 
  }


  getNavs(): Observable<string[]>{
    return this.http.get(dbUrl+"navs").pipe(map(res =>{
      return res["comics"] as string[];
    }));
  }

  getComics(): Observable<Comic[]> { 
    return of(COMICS); 
  }

  getComic(nav: string): Observable<Comic> { 
    return this.http.get(dbUrl+ nav).pipe(map(res =>{ 
     return res as Comic;
    }))
  }

 

}

