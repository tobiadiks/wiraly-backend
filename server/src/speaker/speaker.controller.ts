import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpeakerService } from "./speaker.service";
import { SpeakerControllerBase } from "./base/speaker.controller.base";

@swagger.ApiTags("speakers")
@common.Controller("speakers")
export class SpeakerController extends SpeakerControllerBase {
  constructor(
    protected readonly service: SpeakerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
