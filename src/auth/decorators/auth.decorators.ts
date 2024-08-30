import { applyDecorators, UseGuards } from "@nestjs/common";
import { Role } from "../../common/enums/rol.enum";
import { Roles } from "./roles.decorators";
import { AuthGuard } from "../guard/auth.guard";
import { RolesGuard } from "../guard/roles.guard";
import { RefreshJwGuard } from "../guard/refresh.guard";

export function Auth(role: Role){
    return applyDecorators(Roles(role), UseGuards(AuthGuard, RefreshJwGuard, RolesGuard));
}