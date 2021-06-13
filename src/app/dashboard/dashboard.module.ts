import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ],
})
export class DashboardModule { }
