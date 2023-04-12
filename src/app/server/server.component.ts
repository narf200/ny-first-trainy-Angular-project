import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 11
  serverStatus: string = 'online'
  lastCrashDate: string = '20022015'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getLastServerCrushDate() {
    return this.lastCrashDate
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
