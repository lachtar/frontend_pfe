import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAggridComponent } from './data-aggrid.component';

describe('DataAggridComponent', () => {
  let component: DataAggridComponent;
  let fixture: ComponentFixture<DataAggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAggridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataAggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
