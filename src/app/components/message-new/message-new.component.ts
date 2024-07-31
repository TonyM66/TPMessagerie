import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-message-new',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './message-new.component.html',
  styleUrl: './message-new.component.css'
})
export class MessageNewComponent {
  username: string = '';
  message: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.username && this.message) {
      this.messageService.addMessage(this.username, this.message);
      this.message = '';
    }
  }

  cancelMessage() {
    this.message = '';
  }
}
