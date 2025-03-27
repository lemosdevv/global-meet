import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthGuard } from './services/auth-guard.service';


export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "inicio",
        component: InicioComponent,
        canActivate: [AuthGuard]
    }
];
