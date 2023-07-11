import { Component, OnInit } from '@angular/core';
import {User} from "../app.component";
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-merchant-welcome',
  templateUrl: './merchant-welcome.component.html',
  styleUrls: ['./merchant-welcome.component.css']
})
export class MerchantWelcomeComponent implements OnInit {

  modelMerchant: User = {
    username:'',
    password:'',
    email:'',
    phone:0,
    firstname:'',
    lastname:'',
    address:'',
    merchant:null
  };

  constructor(private router:Router ,private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (sessionStorage.getItem("userData")==null) {
      this.router.navigate(['login']);
    }

    let userData = JSON.parse(sessionStorage.getItem('userData'));
    console.log(userData);
    Object.assign(this.modelMerchant,userData);
  }


  clearLocal(){
    sessionStorage.clear();
  }
  downloadImage(): void {
    const imageUrl = '../../assets/images/merchant.png'; // Replace with your image URL
    this.http.get(imageUrl, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'image/png' }); // Adjust the type based on your image format
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.png'; // Specify the desired filename
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
    });
  }

}
