import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ComicService } from '../comic.service'; 
import { Comic } from '../comic'
import { PARAMETERS } from '@angular/core';
import { map, flatMap } from 'rxjs/operators'; 

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic: Comic;
  numComics: number; 
  currNavs: string [];
  currIndex: number; 

  constructor(
    private route: ActivatedRoute, 
    private comicService: ComicService,
    private Location: Location,
    private router: Router
    ) 
    { }

  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    this.comicService.getNavs()
    .subscribe( navs => {
      this.currNavs = navs;
      this.numComics = this.currNavs.length;
      this.getComic(); 
      });
  
   
  }
//todo: fix the unholy way you handle currIndex lmao wtf is wrong with you 

  getComic(){
    this.route.paramMap.subscribe(params => { 
      var curr_nav = params.get('nav');
      if (!curr_nav) {
        curr_nav = this.currNavs[this.currNavs.length-1]
        this.currIndex = this.currNavs.indexOf(curr_nav); 
      }  
      this.comicService.getComic(curr_nav).subscribe(comic => { 
        this.comic = comic;
        if (this.currNavs[this.currIndex]!=curr_nav) this.currIndex = this.currNavs.indexOf(curr_nav);

      })
    });

  }

  previousComic(){
    let next = this.currIndex -1; 
    if (next >= 0){
      this.router.navigateByUrl('/comics/' + this.currNavs[next]);
      this.currIndex = next; 
    } 
  
  }
  

  nextComic(){
    let next = this.currIndex + 1; 
    if(next<this.numComics){
      this.router.navigateByUrl('/comics/' + this.currNavs[next]); 
      this.currIndex = next; 
    } 
  }

  randComic(){ 
    let next =  Math.ceil(Math.random() * (this.numComics))-1; 
    this.router.navigateByUrl('/comics/' + this.currNavs[next]);
    this.currIndex = next;  

  }

}
