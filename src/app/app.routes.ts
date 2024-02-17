import { Routes } from '@angular/router';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { HomeComponent } from './home/home.component';
import { MarsComponent } from './mars/mars.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'asteroids', component: AsteroidsComponent },
    { path: 'mars', component: MarsComponent}
];
