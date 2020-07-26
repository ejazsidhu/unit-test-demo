import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(public formBuilder:FormBuilder) { 
    this.loginForm=formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.minLength(8)],
      email:['',Validators.email]
    })


  }

  ngOnInit() {

  }

}
