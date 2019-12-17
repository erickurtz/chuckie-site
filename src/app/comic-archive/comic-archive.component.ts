import { Component, OnInit } from '@angular/core';
import { Comic } from '../comic';
import { Issue } from '../issue'; 
import { ComicService } from '../comic.service';
import { IssueService } from '../issue.service';  

@Component({
  selector: 'app-comic-archive',
  templateUrl: './comic-archive.component.html',
  styleUrls: ['./comic-archive.component.css']
})
export class ComicArchiveComponent implements OnInit {

  navs: string []; 
  issues: Issue []; 

  constructor(private comicService: ComicService, private issueService: IssueService) { };

  ngOnInit() {
    this.getNavs();
  };
 
  onSelect(comic: Comic){
    console.log("onSelect");

  };

  getNavs(): void { 
    this.comicService.getNavs()
      .subscribe(navs => this.navs = navs); 
  };

  getIssues(): void{ 
    this.issueService.getIssues().subscribe(issues => this.issues = issues); 
  };

}
