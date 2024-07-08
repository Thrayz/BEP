import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenStorageService } from '../../@core/Services/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../../@core/Services/user.service';
import { AuthService } from '../../@core/Services/auth.service';
import { User } from '../../@core/Models/User';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logIn: FormGroup;
  submitted = false;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  userLogged : User;

  constructor(private authService:AuthService,private userService:UserService,private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {

    /*
    this.logIn = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.email]],
      password: ['', Validators.required],
      
    });
    */

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

    this.logIn = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl('', Validators.required),
      
    });
  }
  
  get f() {
    return this.logIn.controls;
  }

  submit(){
/*
    if(this.logIn.valid)
    {
      this.authService.login(this.logIn.value).subscribe(
        data => {
          this.userLogged = data
          console.log("data coming from singin api : ",data)
          if(data.message == "User does not exist")
          {
            console.log("user not found !!")
          }
          else
          {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data.email);
            //console.log(this.tokenStorage.getToken());
            this.tokenStorage.getUser().signature ? this.router.navigateByUrl("/") : this.router.navigateByUrl("/auth/signature")
          }
        },
        err => {
          if(err.error.message == "Bad credentials")
          {
            console.log("bad credentials !!!")
          }
          else
          {
            console.log("something went wrong !!!")
          }
          console.log("error catched : ",err)
        }
      );
    }
*/
    if(this.logIn.valid){
      if(this.logIn.value.email == "admin@admin.com" && this.logIn.value.password == "admin"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("admin@admin.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "nav@nav.com" && this.logIn.value.password == "nav"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("nav@nav.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "production@production.com" && this.logIn.value.password == "production"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("production@production.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "methode@methode.com" && this.logIn.value.password == "methode"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("methode@methode.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "qualiteProduit@qualiteProduit.com" && this.logIn.value.password == "qualite"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("qualiteProduit@qualiteProduit.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "qualiteProgramme@qualiteProgramme.com" && this.logIn.value.password == "qualite"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("qualiteProgramme@qualiteProgramme.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "operation@operation.com" && this.logIn.value.password == "operation"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("operation@operation.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "be@be.com" && this.logIn.value.password == "be"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("be@be.com")
        this.router.navigateByUrl("/")
      }
      else if(this.logIn.value.email == "all@all.com" && this.logIn.value.password == "all"){
        this.tokenStorage.saveToken(new Date().getTime().toString())
        this.tokenStorage.saveUser("all@all.com")
        this.router.navigateByUrl("/")
      }
      else{
        console.log("wrong credentials")
      }
    }
    
  }


  reloadPage(): void {
    window.location.reload();
  }


}