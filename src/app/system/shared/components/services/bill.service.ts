import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bill } from '../../models/bill.model';

@Injectable()
export class BillService {
     constructor(private http: HttpClient){}
     
     getBill(): Observable<Bill> {
          return this.http.get<Bill>('http://localhost:3000/bill')
     }

     getCurrency(base: string = 'EUR'): Observable<any> {
          return this.http.get(`http://data.fixer.io/api/latest?access_key=15710e5b5da842ee59399d8259eb2d09&base=${base}`)
     }
}