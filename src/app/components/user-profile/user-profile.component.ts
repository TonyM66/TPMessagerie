import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  username: string | null;
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.getCurrentUser() || null;
  }

  updateProfile() {
    this.authService.updateUser(this.username, this.password)
      .subscribe(
        () => {
          alert('Profil mis à jour avec succès');
          this.router.navigate(['/messages']);
        },
        error => {
          alert('Erreur lors de la mise à jour du profil');
        }
      );
  }
}
