import { Injectable } from '@angular/core';

import { Comic } from './comic';
import { COMICS } from './mock-comic';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { strictEqual } from 'assert';


const dbUrl = 'http://127.0.0.1:5000/comics/';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  navs: string[] = []; 



  constructor(private http: HttpClient) { 
    this.navs = ["banana","cat-1", "cat-2"]; //temporary 
  }

  populate(navs: string []){
    this.navs = navs; 
  }

  getNavs(): Observable<string[]>{
      return of(this.navs);
  }

  getComics(): Observable<Comic[]> { 
    return of(COMICS); 
  }

  getComic(nav: string): Observable<Comic> { 
    return this.http.get(dbUrl+ nav).pipe(map(res =>{ 
     return res as Comic;
    }))
    //return of(COMICS.find(comic => comic.nav === nav));
  }

   /* getComic(id: number): Observable<Comic> { 
    return this.http.get(dbUrl+ id);
  } */

  getTotal(): Observable <number> {
    return of(this.navs.length);
  }

 /* private extractComicFromResponse(res: Response): Comic{
    
    
    return 
  } */

}

