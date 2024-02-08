// my-grid.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';
import { CommonModule } from '@angular/common';

interface NameItem {
  value: string;
}


@Component({
  selector: 'app-my-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class MyGridComponent implements OnInit {
  names: NameItem[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.names$.subscribe((allNames) => {
      
      if (allNames.length >= this.names.length) {
        this.names = allNames.map(value => ({ value }));
        
      }
    });
  }

  updateName(name: NameItem, index: number): void {
    this.sharedDataService.setName(name.value, index);
    
  }

}

