import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';
import { BaseApi } from 'src/app/shared/core/base-api';



@Injectable()
export class BillService extends BaseApi{
     constructor(public http: HttpClient){
          super(http);
     }
     
     getBill(): Observable<Bill> {
          return this.get('bill');
     }

     updateBill(bill: Bill): Observable<Bill> {
          return this.put('bill', bill);
     }

     getCurrency(base: string = 'EUR'): Observable<any> {
          return this.http.get(`http://data.fixer.io/api/latest?access_key=15710e5b5da842ee59399d8259eb2d09&base=${base}`);
     }
}