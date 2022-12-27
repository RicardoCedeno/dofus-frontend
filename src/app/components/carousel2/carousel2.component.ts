import { Component, OnInit } from '@angular/core';
import { Imagebutton } from 'src/app/classes/imagebutton';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component implements OnInit {

  imagebuttons:Imagebutton[]=[]
  constructor() { }
  clickedIndex=0;



  ngOnInit(): void {
    this.imagebuttons=[
      {
        id:0,
        image:"https://i.postimg.cc/QCxzRk92/bg-block1-mobile.jpg",
        imageButton:"eueue",
        type:"video"

      },
      {
        id:1,
        image:"https://i.postimg.cc/Yqz3Hr24/image1-section2.jpg",
        imageButton:"sdjsojdop",
        type:"image"


      },
      {
        id:2,
        image:"https://i.postimg.cc/QCxzRk92/bg-block1-mobile.jpg",
        imageButton:"eueue",
        type:"image"

      }
    ]
  }

}
