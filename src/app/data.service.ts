import { Injectable } from '@angular/core';
import { Member } from './member.model';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  membersUrl:string='/api/members';
  constructor(private http: HttpClient) { }

  public getMembers():Observable<Member[]> {
    return this.http.get<Member[]>(this.membersUrl);
  }

  
}
