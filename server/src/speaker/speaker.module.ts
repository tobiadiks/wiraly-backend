import { Module } from "@nestjs/common";
import { SpeakerModuleBase } from "./base/speaker.module.base";
import { SpeakerService } from "./speaker.service";
import { SpeakerController } from "./speaker.controller";
import { SpeakerResolver } from "./speaker.resolver";

@Module({
  imports: [SpeakerModuleBase],
  controllers: [SpeakerController],
  providers: [SpeakerService, SpeakerResolver],
  exports: [SpeakerService],
})
export class SpeakerModule {}
