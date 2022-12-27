import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from 'src/app/classes/class';
import { ClassServiceService } from 'src/app/service/class-service.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  id:number=0;
  classes:Class
  constructor(private route:ActivatedRoute, private classService:ClassServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['idClass'];
    this.classes=new Class();
    this.classService.getAClass(this.id).subscribe(data=>{
      this.classes=data
    })
  }

}
