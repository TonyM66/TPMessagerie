import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import {BehaviorSubject} from "rxjs"; // Ajustez l'importation si l'interface est dans un fichier séparé

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: Message[] = [];

  private messagesSubject = new BehaviorSubject<Message[]>([]);
  messages$ = this.messagesSubject.asObservable();
  authors$ : string[] = [];

  addMessage(username: string, text: string): void {
    const currentMessages = this.messagesSubject.value;
    const newMessage: Message = { username, text, date: new Date() };
    const updatedMessages = [...currentMessages, newMessage].sort((a, b) => a.date.getTime() - b.date.getTime());
    this.messagesSubject.next(updatedMessages);
    this.authors$.push(username);
  }
}
