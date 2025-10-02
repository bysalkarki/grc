import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateRiskCommand } from '../create-risk.command';
import { EventPublisher } from '@nestjs/cqrs';
import { Risk } from '../../models/risk.model';
import { v4 as uuidv4 } from 'uuid';

@CommandHandler(CreateRiskCommand)
export class CreateRiskHandler implements ICommandHandler<CreateRiskCommand> {
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CreateRiskCommand): Promise<any> {
    const { name, description } = command;
    const risk = this.publisher.mergeObjectContext(
      new Risk(uuidv4(), name, description),
    );
    risk.create();
    risk.commit();
  }
}
