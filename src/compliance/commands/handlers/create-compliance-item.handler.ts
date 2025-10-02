import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateComplianceItemCommand } from '../create-compliance-item.command';
import { EventPublisher } from '@nestjs/cqrs';
import { ComplianceItem } from '../../models/compliance-item.model';
import { v4 as uuidv4 } from 'uuid';

@CommandHandler(CreateComplianceItemCommand)
export class CreateComplianceItemHandler
  implements ICommandHandler<CreateComplianceItemCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateComplianceItemCommand): Promise<any> {
    const { name, description } = command;
    const complianceItem = this.publisher.mergeObjectContext(
      new ComplianceItem(uuidv4(), name, description),
    );
    complianceItem.create();
    complianceItem.commit();
  }
}
