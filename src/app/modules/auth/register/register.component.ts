import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FocusTrapModule } from 'primeng/focustrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PasswordModule, FocusTrapModule, MessagesModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  messages = [];

  constructor(private fireAuthService: AuthService, 
    private router: Router
  ) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.messages = [{ severity: 'error', summary: 'Registration Failed', detail: 'Passwords do not match.' }];
      return;
    }
    let userSignUp = {
      email: this.email,
      password: this.password
    };
    this.fireAuthService.signUp(userSignUp).then(resp => {
      console.log(resp);

      this.messages = [{ severity: 'success', summary: 'Registro exitoso' }];
      this.router.navigateByUrl('login')
    }).catch(error => {
      console.error('Error during registration:', error);
      this.messages = [{ severity: 'error', summary: 'Registro fallido', detail: 'Intentelo nuevamente.' }];
    });
  }
}
