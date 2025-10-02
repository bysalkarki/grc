import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { RisksController } from './controllers/risks.controller';
import { RisksService } from './services/risks.service';
import { CreateRiskHandler } from './commands/handlers/create-risk.handler';
import { RiskCreatedHandler } from './events/handlers/risk-created.handler';
import { GetAllRisksHandler } from './queries/handlers/get-all-risks.handler';
import { RisksSagas } from './sagas/risks.saga';

@Module({
  imports: [CqrsModule],
  controllers: [RisksController],
  providers: [
    RisksService,
    CreateRiskHandler,
    RiskCreatedHandler,
    GetAllRisksHandler,
    RisksSagas,
  ],
})
export class RisksModule {}
