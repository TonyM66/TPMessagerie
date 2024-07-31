import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {UsersComponent} from "./components/users/users.component";
import {MessageListComponent} from "./components/message-list/message-list.component";
import {MessageNewComponent} from "./components/message-new/message-new.component";
import {MessageService} from "./services/message.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, MessageListComponent, MessageNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username = '';
  message = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.username && this.message) {
      this.messageService.addMessage(this.username, this.message);
      this.message = '';
    }
  }

  cancelMessage() {
    this.message = '';
  }}
