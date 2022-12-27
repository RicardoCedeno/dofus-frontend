import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/classes/class';
import { ClassServiceService } from 'src/app/service/class-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  classes:Class[]=[]
  constructor(private classService:ClassServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getAllDofusClasses()
  }

  getAllDofusClasses(){
    this.classService.getDofusClasses().subscribe(data=>{
      this.classes=data;
    })
  }

  showClassDetails(idClass:number){
    this.router.navigate(['clases', idClass])
  }


}
