import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
import { PresentationPageComponent } from './components/presentation-page/presentation-page.component';

const routes: Routes = [
  {path: 'clases', component:ClassesListComponent},
  {path: 'dofus', component:PresentationPageComponent},
  {path: 'clases/:idClass', component:ClassDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
