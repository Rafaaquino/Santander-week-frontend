import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stock-model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  stock: Stock[] = [];

  constructor(private dashboardService: DashboardService ) { }

  ngOnInit(): void {
    this.fatchStock();
  }

  async fatchStock(): Promise<void> {
    this.stock = await this.dashboardService.getStocks();
    console.log(this.stock);
  }

}
