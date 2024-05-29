import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard"
export const MAIN_ROUTES: Routes = [
    {path: '', component: HomeComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
    {path: 'courses', component: CoursesComponent}
];