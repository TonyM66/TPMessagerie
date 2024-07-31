import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import {Message} from "../../models/message";
import {AsyncPipe, DatePipe, NgForOf} from "@angular/common";
import {Observable} from "rxjs";


@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(private messageService: MessageService) {
    this.messages$ = this.messageService.messages$;
  }

  ngOnInit(): void {}
}
