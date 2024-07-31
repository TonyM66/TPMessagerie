import {Component} from '@angular/core';
import { MessageService } from '../../services/message.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users : string[] = [];

  constructor(private messageService: MessageService) {
    this.users = this.messageService.authors$;
  }
}
