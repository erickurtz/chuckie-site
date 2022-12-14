import { Injectable } from '@angular/core';

import { Comic } from '../models/comic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'
import { dbUrl } from '../constants';



@Injectable({
    providedIn: 'root'
})
export class ComicService {

    constructor(private http: HttpClient) {
    }


    getNavs(): Observable<string[]> {
        return this.http.get(dbUrl + "navs").pipe(map(res => {
            return res["comics"] as string[];
        }));
    }


    getComic(nav: string): Observable<Comic> {
        return this.http.get(dbUrl + nav).pipe(map(res => {
            return res as Comic;
        }))
    }

}

