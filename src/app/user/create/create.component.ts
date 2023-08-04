import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('mr'),
      firstName: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
      lastName: new FormControl('',
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
      gender: new FormControl('male'),
      email: new FormControl('', [Validators.required, Validators.email]),
      dateOfBirth: new FormControl('', [Validators.minLength(8), Validators.maxLength(10)]),
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
    this.userService.create(this.form.value).subscribe((res:any) => {
      console.log(res);
      alert('User created successfully!');
      this.router.navigateByUrl(`/user/${res.id}/view`);
    })
  }
}
