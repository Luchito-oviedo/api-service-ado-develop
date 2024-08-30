import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { Observable } from "rxjs";
import { jwtConstants } from "../constants/jwt.constants";

@Injectable()
export class RefreshJwGuard implements CanActivate {
    constructor(private jwtService: JwtService) { }
    async canActivate(
        context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) throw new UnauthorizedException();
        try {

            const payload = await this.jwtService.verifyAsync(token, {
                secret: jwtConstants.refreshSecret,
            });
            request['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization.split(' ') ?? [];
        return type === 'Refresh' ? token : undefined;
    };
}