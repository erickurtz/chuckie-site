import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ComicService } from '../comic.service'; 
import { Comic } from '../comic'
import { PARAMETERS } from '@angular/core/src/util/decorators';

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
    this.comicService.getNavs()
    .subscribe( navs => {
      this.currNavs = navs;
      this.numComics = this.currNavs.length;
      });
    console.log(this.currNavs); 
    console.log(this.numComics);
    this.getComic(); 
  }



  //this is ugly and i hate myself for writing it 
  getComic(){
    this.route.paramMap.subscribe(params=> { 
      const curr_nav = params.get('nav');
      console.log ("curr_nav is" + curr_nav); 
    if(curr_nav){
        this.comicService.getComic(curr_nav)
        .subscribe(comic => {
          
          this.comic = comic;
          this.currIndex = this.currNavs.indexOf(curr_nav); 
        });

       //probably inefficient. check later
      }else{
        console.log("no curr nav!") 
        this.comicService.getComic(this.currNavs[this.currNavs.length-1])
        .subscribe(comic =>{ 
          this.comic = comic; 
          console.log(comic.title);
          this.currIndex = this.currNavs.length-1;
        });
      }  
    });
     
    
  } 

  previousComic(){
    let next = this.currIndex -1; 
    console.log("prev is" + next);
    console.log(this.currNavs[next]);
    if (next >= 0) this.router.navigateByUrl('/comics/' + this.currNavs[next]); 
  }
  

  nextComic(){
    let next = this.currIndex + 1; 
    console.log("next is" + next);
    if(next<this.numComics) this.router.navigateByUrl('/comics/' + this.currNavs[next]); 
  }

  randComic(){ 
    let next =  Math.ceil(Math.random() * (this.numComics))-1; 
    console.log("idx of next"+ next)
    this.router.navigateByUrl('/comics/' + this.currNavs[next]); 

  }

}
