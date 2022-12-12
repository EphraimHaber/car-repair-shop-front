import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });

    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }

  }


  submit(): void {
    let obj = this.loginForm.getRawValue();
    this.auth.login(obj).subscribe(data => {
      console.log(data)
      this.auth.setToken(data.jwt)
      this.router.navigate(['/admin'])
    });
  }

}
