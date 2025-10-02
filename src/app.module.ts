import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { RisksModule } from './risks/risks.module';
import { ComplianceModule } from './compliance/compliance.module';

@Module({
  imports: [SharedModule, RisksModule, ComplianceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
