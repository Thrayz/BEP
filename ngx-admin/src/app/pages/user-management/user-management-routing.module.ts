import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AjoutUserComponent } from './ajout-user/ajout-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      {path:'',redirectTo:'',pathMatch:"full"},
      {path:'listUser',component:ListUserComponent},
      {path:'ajoutUser',component:AjoutUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
