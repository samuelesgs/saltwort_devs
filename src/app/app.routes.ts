import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopmenComponent } from './pages/developmen/developmen.component';
import { AplicationsComponent } from './pages/aplications/aplications.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileDeveloperComponent } from './pages/developmen/profile-developer/profile-developer.component';
import { ActivityPlannerInfoComponent } from './pages/aplications/activity-planner-info/activity-planner-info.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AplicationComponent } from './pages/developmen/aplication/aplication.component';

export const routes: Routes = [
    {path : 'Home', component : HomeComponent},
    {path : 'Developers', component : DevelopmenComponent},
    {path : 'Apps', component : AplicationsComponent},
    {path : 'About_of', component : AboutComponent},
    {path: 'ProfileDeveloper/:name', component: ProfileDeveloperComponent},
    {path: 'Application/:name/:company/:project', component: AplicationComponent},
    {path: 'ActivityPlanner', component: ActivityPlannerInfoComponent},
    {path: 'PrivacyPolicy', component: PrivacyPolicyComponent},
    {path: '**',  redirectTo: 'Home'},

];
