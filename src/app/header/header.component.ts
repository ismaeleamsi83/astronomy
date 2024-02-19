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
    { 'id': 0, 'name': 'Home', 'url': '', 'selected': false},
    { 'id': 1, 'name': 'Asteroids', 'url':'asteroids', 'selected': false },
    { 'id': 2, 'name': 'Mars', 'url':'mars', 'selected': false },
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
    console.log("pulsado");
    if(this.menuShow.nativeElement.classList.contains('menu')){
      this.menuShow.nativeElement.classList.add('showMenu');
      this.menuShow.nativeElement.classList.remove('menu');
    }else{
      this.menuShow.nativeElement.classList.add('menu');
      this.menuShow.nativeElement.classList.remove('showMenu');
    }
    
  }

}
