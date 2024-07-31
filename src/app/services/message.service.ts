import { Injectable } from '@angular/core';
import { Message } from '../models/message'; // Ajustez l'importation si l'interface est dans un fichier séparé

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [];

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(username: string, text: string): void {
    this.messages.push({ username, text, date: new Date() });
  }
}
