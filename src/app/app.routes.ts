import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ServiceExamplesComponent } from './components/service-examples/service-examples.component';
import { AComponent } from './components/a/a.component';
import { ObservableExamplesComponent } from './components/observable-examples/observable-examples.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { ApiProductsComponent } from './components/api-products/api-products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'data-binding',
    component: DataBindingComponent,
    title: 'Data Binding',
  },
  {
    path: 'input-and-output',
    component: ParentComponent,
    title: 'Input and Output',
  },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'services', component: ServiceExamplesComponent },
  { path: 'lifecycle-methods', component: AComponent },
  { path: 'observable-examples', component: ObservableExamplesComponent },
  { path: 'quotes', component: QuotesComponent },
  {path :'products',component:ApiProductsComponent}
];
