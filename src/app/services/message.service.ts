import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private readonly BASE_URL = "http://localhost:3000/message";

  constructor(private _client: HttpClient) { }

  public sendMessage(message: Message) {
    this._client.post(this.BASE_URL, message)
  }
}
