import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ComplianceItemCreatedEvent } from '../compliance-item-created.event';

@EventsHandler(ComplianceItemCreatedEvent)
export class ComplianceItemCreatedHandler
  implements IEventHandler<ComplianceItemCreatedEvent>
{
  handle(event: ComplianceItemCreatedEvent) {
    console.log('ComplianceItemCreatedEvent handled:', event);
  }
}
