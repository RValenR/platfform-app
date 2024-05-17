import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path:'admin',
        loadChildren:()=>import('./modules/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    },
    {
        path:'home',
        loadChildren:()=>import('./modules/main/main.routes').then(m => m.MAIN_ROUTES)
    },
];
