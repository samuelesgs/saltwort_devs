import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopmenComponent } from './pages/developmen/developmen.component';
import { AplicationsComponent } from './pages/aplications/aplications.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileDeveloperComponent } from './pages/developmen/profile-developer/profile-developer.component';

export const routes: Routes = [
    {path : 'Home', component : HomeComponent},
    {path : 'Developers', component : DevelopmenComponent},
    {path : 'Apps', component : AplicationsComponent},
    {path : 'About_of', component : AboutComponent},
    {path: 'ProfileDeveloper/:name', component: ProfileDeveloperComponent},
    {path: '**',  redirectTo: 'Home'},

];
