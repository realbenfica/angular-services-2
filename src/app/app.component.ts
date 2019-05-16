import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
