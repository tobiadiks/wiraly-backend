import { Module } from "@nestjs/common";
import { BusinessModuleBase } from "./base/business.module.base";
import { BusinessService } from "./business.service";
import { BusinessController } from "./business.controller";
import { BusinessResolver } from "./business.resolver";

@Module({
  imports: [BusinessModuleBase],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessResolver],
  exports: [BusinessService],
})
export class BusinessModule {}
