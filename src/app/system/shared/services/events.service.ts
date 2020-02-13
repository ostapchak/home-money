import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApi } from 'src/app/shared/core/base-api';
import { HOMEEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
   constructor(public http: HttpClient) {
      super(http);
   }

   addEvent(event: HOMEEvent): Observable<HOMEEvent> {
      return this.post('events', event)
   }

   getEvents(): Observable<HOMEEvent[]> {
      return this.get('events');
   }

   getEventById(id: string): Observable<HOMEEvent> {
      return this.get(`events/${id}`);
   }
}