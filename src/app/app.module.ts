// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MyGridComponent } from './ag-grid/ag-grid.component';
import { DataAggridComponent } from './data-aggrid/data-aggrid.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedDataService } from './shared-data.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent,
    DataAggridComponent,
   
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    
   
    
   
  ],
 
  bootstrap: [AppComponent],
})
export class AppModule {}



