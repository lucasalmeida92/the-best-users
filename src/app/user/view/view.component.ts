import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user!: User;
  userId!: string;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.find(this.userId).subscribe((data: User)=>{
      this.user = data;
    })
  }

  deleteUser() {
    if (confirm('Do you really wanna delete this user?') === true) {
      this.userService.delete(this.userId).subscribe(res => {
        alert('User deleted successfully!');
        this.router.navigateByUrl('/');
      })
    }
  }
}
