import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { GiftServiceBase } from "./base/gift.service.base";

@Injectable()
export class GiftService extends GiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
