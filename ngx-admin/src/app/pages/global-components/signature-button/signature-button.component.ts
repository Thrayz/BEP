import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'signature-button',
  templateUrl: './signature-button.component.html',
  styleUrls: ['./signature-button.component.scss']
})
export class SignatureButtonComponent implements OnInit {

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() titre? :string ;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.buttonClick.emit()
  }

}
