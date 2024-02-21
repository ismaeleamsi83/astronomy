import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('menuShow') menuShow!: ElementRef;

  menu = [
    { 'id': 0, 'icon': '../../assets/images/home.png','name': 'Home', 'url': '', 'selected': false},
    { 'id': 1, 'icon': '../../assets/images/asteroid.png','name': 'Asteroids', 'url':'asteroids', 'selected': false },
    { 'id': 2, 'icon': '../../assets/images/mars.png','name': 'Mars', 'url':'mars', 'selected': false },
    { 'id': 3, 'icon': '../../assets/images/patent.png','name': 'Patents', 'url':'patents', 'selected': false },
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

  showMenu(){
    const windowWidth = window.innerWidth;

    if (windowWidth < 769) {
      if(this.menuShow.nativeElement.classList.contains('menu')){
        this.menuShow.nativeElement.classList.add('showMenu');
        this.menuShow.nativeElement.classList.remove('menu');
      }else{
        this.menuShow.nativeElement.classList.add('menu');
        this.menuShow.nativeElement.classList.remove('showMenu');
      }
    }
    
    
  }

}
