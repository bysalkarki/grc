import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ComplianceController } from './controllers/compliance.controller';
import { ComplianceService } from './services/compliance.service';
import { CreateComplianceItemHandler } from './commands/handlers/create-compliance-item.handler';
import { ComplianceItemCreatedHandler } from './events/handlers/compliance-item-created.handler';
import { GetAllComplianceItemsHandler } from './queries/handlers/get-all-compliance-items.handler';
import { ComplianceSagas } from './sagas/compliance.saga';

@Module({
  imports: [CqrsModule],
  controllers: [ComplianceController],
  providers: [
    ComplianceService,
    CreateComplianceItemHandler,
    ComplianceItemCreatedHandler,
    GetAllComplianceItemsHandler,
    ComplianceSagas,
  ],
})
export class ComplianceModule {}
