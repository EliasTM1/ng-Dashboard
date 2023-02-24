import { Component, Input } from '@angular/core';

type MailScreen = {
  checkMail : "CheckYourMail";
  verifyMail : "VerifyYourMail";
};


@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent {
  @Input() screenType : MailScreen | undefined = undefined;
}
