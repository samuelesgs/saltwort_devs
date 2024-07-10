import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopmenComponent } from './pages/developmen/developmen.component';
import { AplicationsComponent } from './pages/aplications/aplications.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path : 'Home', component : HomeComponent},
    {path : 'Developers', component : DevelopmenComponent},
    {path : 'Apps', component : AplicationsComponent},
    {path : 'About_of', component : AboutComponent},
    {path: '**',  redirectTo: 'Home'},

];
