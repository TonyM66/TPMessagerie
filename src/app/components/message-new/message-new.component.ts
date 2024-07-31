import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-message-new',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './message-new.component.html',
  styleUrl: './message-new.component.css'
})
export class MessageNewComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.messageForm = this.fb.group({
      username: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.messageForm.valid) {
      const { username, text } = this.messageForm.value;
      this.messageService.addMessage(username, text);
      this.messageForm.reset();
    }
  }

  cancelMessage() {
    this.messageForm.reset();
  }
}
