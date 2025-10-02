import { AggregateRoot } from '@nestjs/cqrs';
import { RiskCreatedEvent } from '../events/risk-created.event';

export class Risk extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly description: string,
  ) {
    super();
  }

  create() {
    this.apply(new RiskCreatedEvent(this.id, this.name, this.description));
  }
}
