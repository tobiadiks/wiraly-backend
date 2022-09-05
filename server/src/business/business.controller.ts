import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BusinessService } from "./business.service";
import { BusinessControllerBase } from "./base/business.controller.base";

@swagger.ApiTags("businesses")
@common.Controller("businesses")
export class BusinessController extends BusinessControllerBase {
  constructor(
    protected readonly service: BusinessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
