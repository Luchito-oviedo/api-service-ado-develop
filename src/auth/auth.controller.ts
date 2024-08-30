import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorators';
import { ActiveUser } from '@src/common/decorators/active-user.decorator';
import { UserActiveInterface } from '@src/common/interfaces/user-active.interfaces';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

// interface RequestWriteUser extends Request {
//     user: {
//         email: string,
//         role: string
//     }
// }
@ApiTags('auth')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto,
    ){
        return this.authService.register(registerDto);
    }
    
    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ) {
        return this.authService.login(loginDto);
    }

    // @Get('profile')
    // @Roles(Role.ADMIN)
    // @UseGuards(AuthGuard, RolesGuard)
    // profile(
    //     @Req() req: RequestWriteUser,
    // ){
    //     return req.user;
    // }

    // Permisos administrador para ver los perfiles de los usuarios
    @ApiBearerAuth()
    @Get('profile')
    @Auth(Role.ADMIN)
    profile(@ActiveUser() user: UserActiveInterface){
        console.log(user)
        return this.authService.profile(user);
    }
}
