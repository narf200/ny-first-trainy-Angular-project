import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  isPasswordVisible: boolean = true;
  clickCounter: number = 0;
  clickLog = []

  showDetails(){
    this.clickLog.push(new Date())
    console.log(this.clickCounter)
    return this.isPasswordVisible = !this.isPasswordVisible
  }
}
