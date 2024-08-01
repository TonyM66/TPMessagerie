import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UsersComponent} from "../users/users.component";
import {MessageListComponent} from "../message-list/message-list.component";
import {MessageNewComponent} from "../message-new/message-new.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    UsersComponent,
    MessageListComponent,
    MessageNewComponent
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
