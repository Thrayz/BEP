import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-dialog-choice-service',
  templateUrl: './dialog-choice-service.component.html',
  styleUrls: ['./dialog-choice-service.component.scss']
})
export class DialogChoiceServiceComponent implements OnInit {

  dialogForm:FormGroup

  constructor(protected ref: NbDialogRef<DialogChoiceServiceComponent>) {
    this.dialogForm = new FormGroup({
      statusService : new FormControl('1',Validators.required),
    })
  }

  ngOnInit(): void {
  }


  

  submit() {
    if(this.dialogForm.valid) {
      console.log("service from dialog : ",this.dialogForm.value)
    this.ref.close(this.dialogForm.get("statusService").value);
    }
    
  }

}
