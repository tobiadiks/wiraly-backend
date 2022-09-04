import { Module } from "@nestjs/common";
import { GiftModuleBase } from "./base/gift.module.base";
import { GiftService } from "./gift.service";
import { GiftController } from "./gift.controller";
import { GiftResolver } from "./gift.resolver";

@Module({
  imports: [GiftModuleBase],
  controllers: [GiftController],
  providers: [GiftService, GiftResolver],
  exports: [GiftService],
})
export class GiftModule {}
