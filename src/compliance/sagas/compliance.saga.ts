import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ComplianceItemCreatedEvent } from '../events/compliance-item-created.event';

@Injectable()
export class ComplianceSagas {
  @Saga()
  complianceItemCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(ComplianceItemCreatedEvent),
      delay(1000),
      map((event) => {
        console.log('Inside ComplianceSagas, event:', event);
        return null;
      }),
    );
  };
}
