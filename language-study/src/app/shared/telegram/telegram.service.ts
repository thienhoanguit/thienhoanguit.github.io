import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  private apiUrl: string = 'https://api.telegram.org/bot';  // URL API Telegram
  private botToken: string = '';  // Thay bằng API Token của bạn
  private chatId: string = 'CHAT_ID';  // ID cuộc trò chuyện Telegram mà bạn muốn gửi tin nhắn đến

  constructor(private http: HttpClient) { }

  // Phương thức gửi tin nhắn đến bot Telegram
  sendMessage(message: string): Observable<any> {
    const url = `${this.apiUrl}${this.botToken}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: message
    };

    return this.http.post(url, body);
  }
}
