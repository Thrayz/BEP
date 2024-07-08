import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSignaturepadModule } from '../@core/plugins/signaturePad/src/public-api';
import { AjoutSignatureComponent } from './ajout-signature/ajout-signature.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    AjoutSignatureComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSignaturepadModule
    
  ]
})
export class AuthModule { }
