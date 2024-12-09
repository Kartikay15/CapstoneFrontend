import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string="";
  password: string="";
  successMsg: string | undefined;
  errorMsg:string | undefined;
  msg: string | undefined; 

  constructor(private authService: AuthService, private router: Router, 
              private actRoute: ActivatedRoute
  ){
    this.actRoute.queryParams.subscribe(p=>{
       this.msg = p['msg'];
    })
  }
  navigateToSignUp(){
    this.router.navigateByUrl("/sign-up");
  }
  onLogin(){
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (data)=>{
         let token = data.token; 
         /** you have to know the role of this user that has logged In 
          * use this token, call the api that gives you the full details of this loggedIn user 
         */
        this.authService.getUserDetails(token).subscribe({
          next: (data)=>{
            console.log(token);
            localStorage.setItem('token', token); 
            localStorage.setItem('username', data.username);
            localStorage.setItem('name', data.name);
            localStorage.setItem('role', data.role);
            let role = data.role; 
            switch(role){

              case 'EXECUTIVE':
                this.router.navigateByUrl("/main");
                break; 
                
              case 'ADMIN': 
                this.router.navigateByUrl("/admin");
                break; 

              case 'EXPERT':
                this.router.navigateByUrl("/expert");
                break;

              case 'BUYER':
                console.log('i vl take you to buyer screen');
                break; 

              case 'SELLER':
                this.router.navigateByUrl("/seller");
                break;
              
              case 'LESSOR':
                console.log('i vl take you to lessor screen')
                break;

              case 'RENTER':
                console.log('i vl take you to renter screen')
                break;

              default: 
                this.router.navigateByUrl("/broken-link");
                break; 
            }
          },
          error: (err)=>{
            this.successMsg = undefined
             this.msg = undefined
            this.errorMsg = err.error.msg; 
          }
        })
      },
      error: (err)=>{
        console.log(err);
        this.successMsg = undefined
        this.msg = undefined
        this.errorMsg = err.error.msg; 
      }
    })
  }
}
