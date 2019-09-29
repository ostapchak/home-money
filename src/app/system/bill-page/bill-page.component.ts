import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BillService } from '../shared/components/services/bill.service';
import { Bill } from '../shared/models/bill.model';


@Component({
  selector: 'home-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private billService: BillService) { }

  ngOnInit() {
    this.subscription = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((date: [Bill, any]) => {
      console.log(date);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
