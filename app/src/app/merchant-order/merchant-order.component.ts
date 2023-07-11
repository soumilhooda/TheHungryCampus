import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../menu-service.service';
import { menu } from '../menu/menu.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-order',
  templateUrl: './merchant-order.component.html',
  styleUrls: ['./merchant-order.component.css']
})
export class MerchantOrderComponent implements OnInit {
  model: menu[];
  total: number;

  constructor(private menuService: MenuServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('userData') === null) {
      this.router.navigate(['login']);
    }
    this.getItems();
  }

  clearLocal() {
    sessionStorage.clear();
  }

  getItems(): void {
    this.menuService.getItems().subscribe((men: any[]) => {
      this.model = men;
    });
    this.total = parseFloat(sessionStorage.getItem('total'));
  }
}
