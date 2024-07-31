import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {Message} from "../../models/message";
import {DatePipe, NgForOf} from "@angular/common";


@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }
}
