import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent, User} from "../app.component";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  modelUser: User = {
    username:'',
    password:'',
    email:'',
    phone:0,
    firstname:'',
    lastname:'',
    address:'',
    merchant:null
  };

  constructor(private router:Router) { }

  ngOnInit() {

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData);
    Object.assign(this.modelUser,userData);
    if (sessionStorage.getItem("userData") == null) {
      this.router.navigate(['login']);
    }
    if( sessionStorage.getItem("total")==null)
      this.router.navigate(["menu"]);
  }

  clearLocal(){
    sessionStorage.clear();
  }



}
