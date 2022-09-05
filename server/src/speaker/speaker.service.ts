import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SpeakerServiceBase } from "./base/speaker.service.base";

@Injectable()
export class SpeakerService extends SpeakerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
