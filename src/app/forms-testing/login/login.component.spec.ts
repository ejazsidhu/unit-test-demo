import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';

xdescribe('LoginComponent', () => {
  let loginFormComponent: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(function() {
    loginFormComponent=new LoginComponent(new FormBuilder)
  });
  it('it should create 3 form fields', () => {
expect(loginFormComponent.loginForm.contains('name')).toBe(true);
expect(loginFormComponent.loginForm.contains('email')).toBeTruthy()
expect(loginFormComponent.loginForm.contains('password')).toBeTruthy()
    
  });

  it('it should make name filed required', () => {
    let nameControl=loginFormComponent.loginForm.get('name');
    nameControl.setValue('')
    expect(nameControl.valid).toBeFalsy();
  });

  it('PASSWORD shoule be 8 character long', () => {
    let passwordControl=loginFormComponent.loginForm.get('password');
    passwordControl.setValue('1234567');
    expect(passwordControl.valid).toBeFalsy();
  });

  it('email should be valid email', () => {
    let emailControl=loginFormComponent.loginForm.get('email');
    emailControl.setValue('ejazsidhu@gmail.com');

    expect(emailControl.valid).toBeTruthy();
  });
  
  
  
  


});
