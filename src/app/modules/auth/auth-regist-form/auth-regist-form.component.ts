import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-regist-form',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PasswordModule],
  templateUrl: './auth-regist-form.component.html',
  styleUrl: './auth-regist-form.component.css'
})
export class AuthRegistFormComponent {
  authService = inject(AuthService);
  router = inject(Router);

  email:string = '';
  username:string='';
  password:string='';
  

  onSubmit():void{
    console.log('register init')
    this.authService.register(
      this.email,
      this.username,
      this.password
    ).subscribe(()=>{
      this.router.navigateByUrl('/home')
    })
  }
}
