import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { studCreateComponent } from '../pages/main-page/main-page';
import { ItemsComponent } from '../pages/items/items.component';
import { WelcomestudComponent } from '../pages/welcome-page/welcome-page';

const appRoutes: Routes = [
//  { path: 'student', component: studDetailComponent },
  { path: 'main-page', component: studCreateComponent },
  { path: 'app-items', component: ItemsComponent},
 // { path: 'subjects', component: SubjectsComponent},
  // { path: 'students', component: StudentsComponent},
  // { path: 'staffs', component: StaffsComponent},
  // { path: 'attendance', component: AttendanceComponent},
  { path: '**', component: WelcomestudComponent }
 
];

export const appRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});
