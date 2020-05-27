import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import {DataService} from '../data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
members:Member[];
selectedMember;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // this.members = [
     
    //  {id:'123',name:'tester 1',email:'test@test.com',phoneNumber:'123',gender:'M',type:'standard'}

    // ]
    this.dataService.getMembers().subscribe((data:Member[]) => {console.log(data);this.members = data,
      (err) => {
        console.log(err);
      }
    });
  }


  public selectMember(member){
    this.selectedMember = member;
  }
 

}
