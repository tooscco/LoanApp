import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';


export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'Admin', component: AdminComponent
    },
    {
        path: 'Staff', component: StaffComponent
    },
  ];
