import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private fireAuthService: AuthService, 
    private router: Router
  ) {}

  logout(){
    console.log('Logout')
    this.fireAuthService.logOut();
    this.router.navigateByUrl('login')
  }
}
