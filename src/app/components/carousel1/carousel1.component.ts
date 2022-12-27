import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgCollection: Array<object> = [
    {
      image: 'https://i.postimg.cc/4Nd7PmSz/1554578.jpg',
      thumbImage: 'https://i.postimg.cc/4Nd7PmSz/1554578.jpg',
      alt: 'Image 1',
      title: 'Yopuscudo'
    }, {
      image: 'https://i.postimg.cc/k5thbMCC/1555829.jpg',
      thumbImage: 'https://i.postimg.cc/k5thbMCC/1555829.jpg',
      title: 'Pack belicista',
      alt: 'Image 2'
    }, {
      image: 'https://i.postimg.cc/j503QVq7/1558311.jpg',
      thumbImage: 'https://i.postimg.cc/j503QVq7/1558311.jpg',
      title: 'Pack Djaul',
      alt: 'Image 3'
    }, {
      image: 'https://i.postimg.cc/K8YYFw2B/mea-all-950-3102.jpg',
      thumbImage: 'https://i.postimg.cc/K8YYFw2B/mea-all-950-3102.jpg',
      title: 'Nuevos packs de abono',
      alt: 'Image 4'
    }, {
      image: 'https://i.postimg.cc/jdcjpKGR/mea-all-950-3103.jpg',
      thumbImage: 'https://i.postimg.cc/jdcjpKGR/mea-all-950-3103.jpg',
      title: 'Descubre el mundo de los 12',
      alt: 'Image 5'
    }, {
      image: 'https://i.postimg.cc/DZ0QXBLX/mea-es-950-310.jpg',
      thumbImage: 'https://i.postimg.cc/DZ0QXBLX/mea-es-950-310.jpg',
      title: 'Starter pack',
      alt: 'Image 6'
    }
];


}
