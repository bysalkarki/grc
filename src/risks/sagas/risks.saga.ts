import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { RiskCreatedEvent } from '../events/risk-created.event';

@Injectable()
export class RisksSagas {
  @Saga()
  riskCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(RiskCreatedEvent),
      delay(1000),
      map((event) => {
        console.log('Inside RisksSagas, event:', event);
        return null;
      }),
    );
  };
}
