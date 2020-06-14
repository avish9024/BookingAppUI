import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  public loginModel : Login = new Login();
  constructor(
    private formBuilder : FormBuilder,
    public loginService : LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm = () => {
    this.loginForm = this.formBuilder.group({
       emailId: '',
       password : ''
    });
  }

  public onLogin(filter) {
    
    this.loginModel.emailId = filter.emailId;
    this.loginModel.password = filter.password;
    console.log(this.loginModel);
    this.loginService.getLogin(this.loginModel).subscribe((data) => {
      console.log(data);
      if(data.role === "admin"){
        this.router.navigate(['/admin',data]);
      }else{
        this.router.navigate(['/home',data]);
      }
      
    })

}
}
