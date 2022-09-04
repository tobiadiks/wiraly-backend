import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GiftService } from "./gift.service";
import { GiftControllerBase } from "./base/gift.controller.base";

@swagger.ApiTags("gifts")
@common.Controller("gifts")
export class GiftController extends GiftControllerBase {
  constructor(
    protected readonly service: GiftService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
