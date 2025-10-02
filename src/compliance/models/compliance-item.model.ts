import { AggregateRoot } from '@nestjs/cqrs';
import { ComplianceItemCreatedEvent } from '../events/compliance-item-created.event';

export class ComplianceItem extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly description: string,
  ) {
    super();
  }

  create() {
    this.apply(
      new ComplianceItemCreatedEvent(this.id, this.name, this.description),
    );
  }
}
