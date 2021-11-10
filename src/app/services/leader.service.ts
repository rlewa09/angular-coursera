import { Injectable } from '@angular/core';
import { delay, of, Observable } from 'rxjs';

import { Leader } from "../shared/leader";
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string): Observable<Leader> {
    return of(LEADERS.filter((lead) => (lead.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedLeaders(): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }
}
