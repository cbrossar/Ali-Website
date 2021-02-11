import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  email_url = 'http://18.210.13.88:5000/';

  sendEmail(data) {
    console.log(data);
    return this.http.post(this.email_url, data);
  }
}
