import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RiskCreatedEvent } from '../risk-created.event';

@EventsHandler(RiskCreatedEvent)
export class RiskCreatedHandler implements IEventHandler<RiskCreatedEvent> {
  handle(event: RiskCreatedEvent) {
    console.log('RiskCreatedEvent handled:', event);
  }
}
