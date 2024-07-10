import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopmenComponent } from './pages/developmen/developmen.component';

export const routes: Routes = [
    {path : 'Home', component : HomeComponent},
    {path : 'Developers', component : DevelopmenComponent},
    {path: '**',  redirectTo: 'Home'},

];
