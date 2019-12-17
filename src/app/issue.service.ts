import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { dbUrl } from './constants';
import { Observable, of} from 'rxjs'; 
import { ISSUES }   from './mock-issues';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  // returns an issues - returns a string based on name
  getIssue(title: string): Observable<Issue>{ 

    return of(ISSUES.find(issue => issue.title == title));

  } 

  getIssues(){ 

    return of(ISSUES); 
  }
}
