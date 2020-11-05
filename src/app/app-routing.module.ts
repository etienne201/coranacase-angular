import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';


const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: { title: 'List of cases' }
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: { title: 'Add Case' }
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: { title: 'Edit Case' }
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: { title: 'Cases Statistic' }
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: { title: 'Case Details' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
