import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isActive: boolean = false;

  menu = [
    { 'id': 0, 'name': 'Home', 'url': '', 'selected': false},
    { 'id': 1, 'name': 'Asteroids', 'url':'asteroids', 'selected': false },
  ];

  toggleActive(index: number){
    
    for(let i=0;i< this.menu.length ;i++){
      if (i === index) {
        this.menu[i].selected = true;
      }else{
        this.menu[i].selected = false;
      }
    }
   
  }

}
