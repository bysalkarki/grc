import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateComplianceItemCommand } from '../commands/create-compliance-item.command';
import { GetAllComplianceItemsQuery } from '../queries/get-all-compliance-items.query';

@Controller('compliance')
export class ComplianceController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: { name: string; description: string }) {
    const { name, description } = body;
    return this.commandBus.execute(
      new CreateComplianceItemCommand(name, description),
    );
  }

  @Get()
  async findAll() {
    return this.queryBus.execute(new GetAllComplianceItemsQuery());
  }
}
