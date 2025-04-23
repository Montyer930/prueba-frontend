import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return !!this.auth.getToken();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
