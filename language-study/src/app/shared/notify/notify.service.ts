import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private messageService: MessageService) { }
  public ok(message: string) {
    this.messageService.add({severity: 'success', summary: 'Thông báo', detail: message})
  }
  public error(message: string) {
    this.messageService.add({severity: 'danger', summary: 'Thông báo', detail: message})
  }
}
