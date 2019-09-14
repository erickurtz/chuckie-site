import { Injectable } from '@angular/core';

import { Comic } from './comic';
import { COMICS } from './mock-comic'
import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ComicService {



  constructor() { }

  getComics(): Observable<Comic[]> { 
    return of(COMICS); 
  }

  getComic(id: number): Observable<Comic> { 
    return of(COMICS.find( comic => comic.id === id)); 
  }

  getTotal(): Observable <number> {
    return of(COMICS.length);
  }
}
