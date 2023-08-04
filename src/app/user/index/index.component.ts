import { Component, OnInit } from '@angular/core';
import { UserPreview, UsersList } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  users: UserPreview[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data: UsersList)=>{
      this.users = data.data;
      console.log(this.users);
    })
  }

  deleteUser(id:string){
    if (confirm('Do you really wanna delete this user?') === true) {
      this.userService.delete(id).subscribe(res => {
        this.users = this.users.filter(item => item.id !== id);
        alert('User deleted successfully!');
      })
    }
  }
}
