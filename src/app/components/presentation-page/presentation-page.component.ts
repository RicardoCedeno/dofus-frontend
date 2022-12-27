import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/classes/news';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss']
})
export class PresentationPageComponent implements OnInit {

  news:News[]=[
    {
      text1:"INFO",
      text2:"Tales of Krosmoz: 16 intensos minutos de música...",
      imageurl:"https://i.postimg.cc/Yqz3Hr24/image1-section2.jpg"
    },
    {
      text1:"SHOP",
      text2:"Pack Djaul: ¡golpe de calor para desiembro!",
      imageurl:"https://i.postimg.cc/GpHJGvFY/image-2-section2.jpg"
    },
    {
      text1:"INFO",
      text2:"¡WAVEN está disponible en versión alfa... y en inglés!",
      imageurl:"https://i.postimg.cc/CxM4M3dc/image-3-section2.jpg"
    },
    {
      text1:"INFO",
      text2:"¡Navidad en directo y en música!",
      imageurl:"https://i.postimg.cc/vZPt40Vb/image-4-section2.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
