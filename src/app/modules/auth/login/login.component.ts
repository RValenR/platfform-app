import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { FocusTrapModule } from 'primeng/focustrap';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PasswordModule, FocusTrapModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // fireAuthService = inject(AuthService);
  // router = inject(Router);
  messages = [];
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private fireAuthService: AuthService, 
    private router: Router
  ) {}


  login() {
    console.log('login', this.email, this.password);
    let userSignIn = {
      email: this.email,
      password: this.password
    }
    this.fireAuthService.signIn(userSignIn).then(resp => {
      console.log('Repuesta',resp);
      this.router.navigateByUrl('home')
    }).catch(error => {
      console.error('Error during login:', error);
      this.messages = [
        { severity: 'error', detail: 'Error al iniciar sesion, intentelo nuevamente' }
      ];
    })
  }

  // onSubmit(): void {
  //   console.log('register init')
  //   this.fireAuthService.register(
  //     this.email,
  //     this.username,
  //     this.password
  //   ).subscribe(() => {
  //     this.router.navigateByUrl('/home')
  //   })
  // }
}
