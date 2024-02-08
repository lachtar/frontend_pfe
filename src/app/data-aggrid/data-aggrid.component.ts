// data-aggrid.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../shared-data.service';
import { FormsModule } from '@angular/forms';

interface NameItem {
  value: string;
}

@Component({
  selector: 'app-data-aggrid',
  templateUrl: './data-aggrid.component.html',
  styleUrls: ['./data-aggrid.component.css'],
  imports: [FormsModule, CommonModule],
  standalone:true,
})
export class DataAggridComponent implements OnInit {
  names: string[] = Array.from({ length: 12 }, () => '');
  inputValues: string[] = Array.from({ length: 12 }, () => ''); // New array to store input values

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.names$.subscribe((names) => {
      this.names = names;
    });
  }

  updateInputValue(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    this.inputValues[index] = target.value;
  }

  onSubmit(): void {
    // You can now use this.inputValues for further processing or pass it to the shared service
    console.log('Input values:', this.inputValues);
  }
}
  
  
  

 

