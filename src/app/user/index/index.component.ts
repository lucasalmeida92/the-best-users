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
  gridColumns: number | undefined;
  mobileBreakpoint: number = 720;
  mobileGridColumns: number = 1;
  desktopGridColumns: number = 2;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.gridColumns = (window.innerWidth <= this.mobileBreakpoint)
      ? this.mobileGridColumns
      : this.desktopGridColumns;
    this.userService.getAll().subscribe((data: UsersList)=>{
      this.users = data.data;
      console.log(this.users);
    })
  }

  onResize(event:any) {
    this.gridColumns = (event.target.innerWidth <= this.mobileBreakpoint)
      ? this.mobileGridColumns
      : this.desktopGridColumns;
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
