import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CoursesComponent } from "./courses/courses.component";

export const MAIN_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'courses', component: CoursesComponent}
];