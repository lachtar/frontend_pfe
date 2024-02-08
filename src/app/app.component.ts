import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Assurez-vous d'ajouter ces lignes si nécessaires
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridAngular } from '@ag-grid-community/angular';
import { MyGridComponent } from './ag-grid/ag-grid.component';
import{ DataAggridComponent} from './data-aggrid/data-aggrid.component';
import { SharedDataService } from './shared-data.service';
import { FormsModule } from '@angular/forms';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, 
  providers:[SharedDataService],
  
  imports: [
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    AgGridAngular, 
    MyGridComponent,
    DataAggridComponent,
    FormsModule,
   
   
   
   
  ],
})
export class AppComponent implements OnInit {
  tableName: string = '';  // Définir une variable pour stocker le nom de la table

  constructor(private sharedDataService: SharedDataService ) {}

  ngOnInit(): void {
    // Souscrire aux mises à jour du nom de la table
    this.sharedDataService.tableName$.subscribe((tableName) => {
      this.tableName = tableName;
      
    });
  }
  
}
 


