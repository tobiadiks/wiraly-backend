import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BusinessServiceBase } from "./base/business.service.base";

@Injectable()
export class BusinessService extends BusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
