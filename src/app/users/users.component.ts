import { User } from './../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  user : User  = {
  firstname: '',
  lastname: '',
  email:''
  };

  users : User[];
  showExtended : boolean = false;
  showUserForm : boolean = false;
  @ViewChild('userForm') form : any;
  constructor() { }

  ngOnInit() {
    console.log('Init method for UsersComponent');
      this.users = [
        {
          firstname: 'John',
          lastname: 'Doe',
          email: 'john.doe@gmail.com',
          joined : new Date('02/03/2018 08:07:22'),
          hide : true,
          isActive:true
        },
        {
          firstname: 'Mark',
          lastname: 'Scott',
          email: 'mark.scott@gmail.com',
          joined: new Date('04/03/2018 08:07:22'),
          hide: true,
          isActive:true
        },
        {
          firstname: 'Jonathan',
          lastname: 'D\'souza',
          email : 'jdsouza@gmail.com',
          joined: new Date('05/03/2018 08:07:22'),
          hide : true,
          isActive:false
        }
      ] 
      this.showExtended = true;
  }

  addUser(user : User) {
    //this.users.push(user);
  }

  onSubmit({value,valid} : { value:User, valid:boolean}){
    if(!valid){
      console.log('Form validation failed! Please recheck!');
    } else {
      value.isActive=true;
      value.joined=new Date();
      value.hide=true;
      this.users.unshift(value);
      this.form.reset();
    }
    
  }
}
