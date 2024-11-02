import { Component,computed,signal } from '@angular/core';
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
export class UserComponent
{
  // pass initial value to the signal
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar)
  // just for image name with it's path
  // get imagePath()
  // {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  //
  onSelectedUser()
  {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //call set on signal object
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
