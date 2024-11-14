import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PersonasComponent } from './features/personas/personas.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'personas',component:PersonasComponent}
];
