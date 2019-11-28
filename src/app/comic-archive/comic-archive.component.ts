import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { ComicService } from '../comic.service'; 

@Component({
  selector: 'app-comic-archive',
  templateUrl: './comic-archive.component.html',
  styleUrls: ['./comic-archive.component.css']
})
export class ComicArchiveComponent implements OnInit {

  navs: string []; 

  constructor(private comicService: ComicService) { }

  ngOnInit() {
    this.getNavs();
  
  }
 
  onSelect(comic: Comic){
    console.log("onSelect");

  }

  getNavs(): void { 
    this.comicService.getNavs()
      .subscribe(navs => this.navs = navs); 
  }


}
