import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: string = '';
  isEmptyUserName: boolean = true;

  onCreateUser() {
    this.isEmptyUserName = false
    return this.userName = this.userName  + ' was created';
  }

  onResetUserNameInput() {
    return this.userName = '';
  }

  // onUpdateUserName(event: Event) {
  //   console.log(event)
  //   this.isEmptyUserName = false
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }
}
