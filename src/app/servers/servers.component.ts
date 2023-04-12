import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  servers = [{name: 'Server 1'}, {name: 'Server 2'}];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.servers.push({name: this.serverName})
    console.log(this.servers)
    return this.serverCreationStatus = 'Server was created ' + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
