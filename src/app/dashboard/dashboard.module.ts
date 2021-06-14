import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { StockCardComponent } from './stock-card/stock-card.component';



@NgModule({
  declarations: [
    PageComponent,
    StockCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    PageComponent,
    StockCardComponent
  ],
})
export class DashboardModule { }
