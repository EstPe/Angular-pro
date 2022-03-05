import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 num:number=8;
courseList : any = [
 {number:292100 , name:'java 1'},
 {number:292101 , name:'java 2'},
 {number:292102 , name:'python'},
 {number:292103 , name:'angulr 1'},
 {number:292104 , name:'angulr 2'},
 {number:292105 , name:'react'},
 {number:292106 , name:'mongodb'},
 {number:292107 , name:'SQL'},
]
}
