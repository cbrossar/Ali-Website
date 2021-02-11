import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  body: string = "";

  constructor(private emailService: EmailService) {   }

  ngOnInit() {
  }

  send_email() {

    var data = {
      'name': this.name,
      'email': this.email,
      'body': this.body
    }

    console.log(data)

    this.emailService.sendEmail(data).subscribe((result) => {
      console.log(result);
    },
    error => {
      console.log(error);
    });
  }

}
