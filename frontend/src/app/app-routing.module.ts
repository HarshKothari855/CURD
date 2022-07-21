import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'create', title: 'Create',component: CreateComponent },
  { path: 'edit/:id', title: 'Edit', component: UpdateComponent},
  { path: '404', title: '404', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
