import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studentList : any = [
    {id:1 , Name:'Idan Guy' , Course:'Angular 2'},
    {id:2 , Name:'Sharon Tal' , Course:'Angular 1'},
    {id:3 , Name:'Yuval Shir' , Course:'Python'},
    {id:4 , Name:' Adam Gil' , Course:'Angular 2'},
    {id:5 , Name:'Ester Peretz' , Course:'Angular '}
  ]
  studentID:String='00'
  

}
