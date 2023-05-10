import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

loginForm!: FormGroup;

constructor(private fb: FormBuilder, private service: AuthService, private router: Router){}
  ngOnInit() {

    this.loginForm= this.fb.group({
      username: ['', [Validators.required]],
      password:['',[Validators.required]]
    })

  }

  submit(){
    if(this.loginForm.value){
    this.service.login(this.loginForm.value).subscribe((res)=>{
      this.router.navigate(['/home'])
    })
    }else{
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form in invalid")
    }
  }

}
