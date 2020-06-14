import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  public registerModel : Register = new Register();
  constructor(
    public formBuilder : FormBuilder,
    public registerService : RegisterService,
    public router : Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm = () => {
    this.registerForm = this.formBuilder.group({
       fullName : '',
       emailId: '',
       password : '',
       city : ''
    });
  }

  public onRegister(filter){
    this.registerModel.emailId = filter.emailId;
    this.registerModel.password = filter.password;
    this.registerModel.city = filter.city;
    this.registerModel.fullName = filter.fullName;
    this.registerModel.role = "user";

    this.registerService.getRegistered(this.registerModel).subscribe((data) => {
      this.router.navigate(['/login',data]);
    })
  }

}
