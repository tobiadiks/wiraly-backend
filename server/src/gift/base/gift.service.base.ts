/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Gift } from "@prisma/client";

export class GiftServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GiftFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftFindManyArgs>
  ): Promise<number> {
    return this.prisma.gift.count(args);
  }

  async findMany<T extends Prisma.GiftFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftFindManyArgs>
  ): Promise<Gift[]> {
    return this.prisma.gift.findMany(args);
  }
  async findOne<T extends Prisma.GiftFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftFindUniqueArgs>
  ): Promise<Gift | null> {
    return this.prisma.gift.findUnique(args);
  }
  async create<T extends Prisma.GiftCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftCreateArgs>
  ): Promise<Gift> {
    return this.prisma.gift.create<T>(args);
  }
  async update<T extends Prisma.GiftUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftUpdateArgs>
  ): Promise<Gift> {
    return this.prisma.gift.update<T>(args);
  }
  async delete<T extends Prisma.GiftDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GiftDeleteArgs>
  ): Promise<Gift> {
    return this.prisma.gift.delete(args);
  }
}
