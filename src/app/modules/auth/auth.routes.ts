import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import {canActivate, redirectLoggedInTo, } from "@angular/fire/auth-guard"

export const AUTH_ROUTES: Routes = [
    {path: 'login', component: LoginComponent, ...canActivate(()=>redirectLoggedInTo(['/home']))},
    {path: 'register', component: RegisterComponent, ...canActivate(()=>redirectLoggedInTo(['/home']))},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', redirectTo: '/login' },
];