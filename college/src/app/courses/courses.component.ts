import { viewClassName } from '@angular/compiler';
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
   //להגשה 
    Welcome: string ="Welcome to our college"
    imgUrl="https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png"

  courseList : any = [
    {number:292100 , name:'java 1' ,semster:'A'},
    {number:292101 , name:'java 2' ,semster:'B'},
    {number:292102 , name:'python' ,semster:'A'},
    {number:292103 , name:'angulr 1' ,semster:'B'},
    {number:292104 , name:'angulr 2' ,semster:'A'},
    {number:292105 , name:'react' ,semster:'B'},
    {number:292106 , name:'mongodb' ,semster:'B'},
    {number:292107 , name:'SQL' ,semster:'A'},
  ]
  showAngular(){
    console.log("The course number of Angular 1 is : ",this.courseList[3].number)
  }
  changeImg(){
    this.imgUrl= "assets/pic.jpeg"
  }


 // תרגילי מעבדה 
  courseInSemester : number = 4
  message : string = "Information Courses"
  isPythonActive:boolean = false
  totalCourses : Number = 8 
  coursesList : Array<string> = [
  this.courseList[0].name,
  this.courseList[1].name,
  this.courseList[2].name,
  this.courseList[3].name,
  this.courseList[4].name,
  this.courseList[5].name,
  this.courseList[6].name
 ]

 getCoursesInSemester(){
  return this.courseInSemester
 }

 showMessage(){
  console.log(this.message)
 }

 printCourses(){
  for(let course of this.courseList){
    console.log(this.courseList.number,)
  }
 }

 checkPython(){
  if(this.isPythonActive == true)
    return true
  else 
    return false
 }

 checkCourses(){
   if(this.courseInSemester>3)
    return true
  else
    return false
 }

}