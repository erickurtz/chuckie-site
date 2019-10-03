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



  constructor(private http: HttpClient) { }

  getComics(): Observable<Comic[]> { 
    return of(COMICS); 
  }

  getComic(id: number): Observable<Comic> { 
    console.log("test test test test"
    )
    this.http.get(dbUrl+ id).subscribe((res)=>{ 
      console.log(res);
    });
    //return of(COMICS.find( comic => comic.id === id)); 
    return this.http.get(dbUrl+ id).pipe(map(res =>{ 
     return res as Comic;
    }))
  }

   /* getComic(id: number): Observable<Comic> { 
    return this.http.get(dbUrl+ id);
  } */

  getTotal(): Observable <number> {
    return of(COMICS.length);
  }

 /* private extractComicFromResponse(res: Response): Comic{
    
    
    return 
  } */

}

