import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dofus-frontend';

  showMenu=false;

  activeMenu(){
    this.showMenu = !this.activeMenu
  }
}

