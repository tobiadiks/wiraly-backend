import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SpeakerResolverBase } from "./base/speaker.resolver.base";
import { Speaker } from "./base/Speaker";
import { SpeakerService } from "./speaker.service";

@graphql.Resolver(() => Speaker)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SpeakerResolver extends SpeakerResolverBase {
  constructor(
    protected readonly service: SpeakerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
