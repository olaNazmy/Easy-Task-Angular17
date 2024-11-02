import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
// random index
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  // just for image name with it's path
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  //
  onSelectedUser()
  {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}