import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) { }

  addMessage(severity: string, detail: string, summary?: string,) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }
}
