import { Component, OnInit } from '@angular/core';
import custOrders from '../orders';

@Component({
  selector: 'app-transactions-panel',
  templateUrl: './transactions-panel.component.html',
  styleUrls: ['./transactions-panel.component.css']
})
export class TransactionsPanelComponent implements OnInit {

  orders: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.orders = custOrders;
  }

}
