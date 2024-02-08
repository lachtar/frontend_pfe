
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  
private url='http://localhost:8080/api/users';

  constructor(){}

  


  private namesSubject = new BehaviorSubject<string[]>(Array.from({ length: 12 }, () => ''));
  names$ = this.namesSubject.asObservable();

  private tableNameSubject = new BehaviorSubject<string>('');
  tableName$ = this.tableNameSubject.asObservable();

  private columnTypeDataSubject = new BehaviorSubject<{ value: string }[]>(Array.from({ length: 5 }, () => ({ value: '' })));
  columnTypeData$ = this.columnTypeDataSubject.asObservable();

 
 
  setName(name: string, index: number): void {
    const currentNames = this.namesSubject.getValue();
    currentNames[index] = name;
    this.namesSubject.next([...currentNames]);
  }

  setTableName(tableName: string): void {
    this.tableNameSubject.next(tableName);
  }

  setColumnTypeData(inputValues: { value: string }[]): void {
    this.columnTypeDataSubject.next(inputValues);
  }
}
