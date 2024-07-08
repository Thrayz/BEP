import { Component, OnInit } from '@angular/core';
import { User } from '../../../@core/Models/User';
import { UserService } from '../../../@core/Services/user.service';
import { Router } from '@angular/router';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import { AjoutUserComponent } from '../ajout-user/ajout-user.component';

@Component({
  selector: 'ngx-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUser:User[]

  constructor(private userService:UserService,private router:Router,private service: SmartTableData) {
    
  }

  settings = {
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      component: AjoutUserComponent,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      position : 'right'
    },
    columns: {
      nom: {
        title: 'Nom',
        type: 'string',
      },
      prenom: {
        title: 'Prenom',
        type: 'string',
      },
      email: {
        title: 'Email Adresse',
        type: 'string',
      },
      matricule: {
        title: 'Matricule',
        type: 'string',
      },
      serviceStatus: {
        title: 'Service de travail',
        type: 'string',
      },
      poste: {
        title: 'Poste',
        type: 'string',
      },
      uap: {
        title: 'UAP',
        type: 'string',
      },
      dateCreation: {
        title: 'Date de création',
        type: 'date',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.userService.getAllUsers().subscribe(data => {
      this.listUser = data
      this.source.load(data);
    })
  }

}
