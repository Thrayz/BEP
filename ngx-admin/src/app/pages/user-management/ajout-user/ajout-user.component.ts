import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../@core/Services/user.service';
import { AuthService } from '../../../@core/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {

  userForm:FormGroup
  constructor(private router:Router,private authService:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      nom : new FormControl('',Validators.required),
      prenom : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      matricule : new FormControl('',Validators.required),
      serviceStatus : new FormControl('',Validators.required),
      poste : new FormControl('',Validators.required),
      uap : new FormControl('',Validators.required),
    })
  }


  onSubmit(){

    console.log(this.userForm.value)

    if(this.userForm.valid){
      this.authService.signup(this.userForm.value).subscribe(data=>{
          console.log("result that came from signup : ",data);
          //console.log("after register data is : "+data);
          this.router.navigateByUrl("/pages/userManagement/listUser")
        },
        err => {
          console.log("errr : ",err)
        },
      );
    }
  }


  get fs() {
    return this.userForm.controls;
  }


}
