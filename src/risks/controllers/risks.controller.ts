import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateRiskCommand } from '../commands/create-risk.command';
import { GetAllRisksQuery } from '../queries/get-all-risks.query';

@Controller('risks')
export class RisksController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: { name: string; description: string }) {
    const { name, description } = body;
    return this.commandBus.execute(new CreateRiskCommand(name, description));
  }

  @Get()
  async findAll() {
    return this.queryBus.execute(new GetAllRisksQuery());
  }
}
