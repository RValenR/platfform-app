import { Routes } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/auth-guard"

export const ADMIN_ROUTES: Routes = [
    {path: '', component: AdminPanelComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
];