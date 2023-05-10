import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm !:FormGroup

  constructor(private fb: FormBuilder, private service:AuthService, private messageService:MessageService, private router:Router){}
  ngOnInit(){
    this.registerForm= this.fb.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      username:['', [Validators.required]],
      password: ['', [Validators.required]]
    
    })

  }

  submit(){   
    const dataToSend= this.registerForm.value
    dataToSend.role="Admin"; 
    dataToSend.token= "null"
    if(this.registerForm.value){
      this.service.signup(dataToSend).subscribe({
        next:(res)=>{
          this.router.navigate(['login'])
        this.messageService.add({
          severity:'success',
          summary: 'Registration success',
          detail:'You have successfully registered'
        });
      },
      error:(err)=>{
       
      },
    });
  }
}
}