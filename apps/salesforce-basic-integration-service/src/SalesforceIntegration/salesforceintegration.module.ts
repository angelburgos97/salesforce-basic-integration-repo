import { Module } from "@nestjs/common";
import { SalesforceIntegrationService } from "./salesforceintegration.service";
import { SalesforceIntegrationController } from "./salesforceintegration.controller";
import { SalesforceIntegrationResolver } from "./salesforceintegration.resolver";

@Module({
  controllers: [SalesforceIntegrationController],
  providers: [SalesforceIntegrationService, SalesforceIntegrationResolver],
  exports: [SalesforceIntegrationService],
})
export class SalesforceIntegrationModule {}
