import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userId!: string;
  user!: User;
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.find(this.userId).subscribe((data: User)=>{
      this.user = data;
    })

    this.form = new FormGroup({
      title: new FormControl(''),
      firstName: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
      lastName: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
      gender: new FormControl(''),
      dateOfBirth: new FormControl('', [Validators.minLength(8)]),
      phone: new FormControl(''),
      picture: new FormControl(''),
      location: new FormGroup({
        street: new FormControl('',
          [Validators.minLength(5), Validators.maxLength(100)]
        ),
        city: new FormControl('',
          [Validators.minLength(2), Validators.maxLength(30)]
        ),
        state: new FormControl('',
          [Validators.minLength(2), Validators.maxLength(30)]
        ),
        country: new FormControl('',
          [Validators.minLength(2), Validators.maxLength(30)]
        ),
        timezone: new FormControl('',
          [Validators.minLength(5), Validators.maxLength(6)]
        ),
      }),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.userService.update(this.userId, this.form.value).subscribe((res:any) => {
      alert('User edited successfully!');
      this.router.navigateByUrl(`/user/${res.id}/view`);
    })
  }
}

