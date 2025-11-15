import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'input-and-output',component:ParentComponent},
    {path:'pipes',component:PipesComponent},
    {path:'directives',component:DirectivesComponent}
];
