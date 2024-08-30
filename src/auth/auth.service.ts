import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto) {
        const { email, password, repeatPassword } = registerDto;
        const user = await this.userService.findOneByEmail(email);

        if (user) {
            throw new BadRequestException('El usuario ya existe');
        }

        const salt = await bcryptjs.genSalt();
        const hashedPassword = await bcryptjs.hash(password, salt); // Verifica que password no sea undefined
        const hashedRepeatPassword = await bcryptjs.hash(repeatPassword, salt);

        const newUser = await this.userService.create({
            ...registerDto,
            password: hashedPassword,
            repeatPassword: hashedRepeatPassword
        });
        return newUser;
    }

    async login({email, password}: LoginDto) {
        const user = await this.userService.findByEmailWithPassword(email);

        if (!user){
            throw new UnauthorizedException('El correo no existe');
        }
        const isValidPassword = await bcryptjs.compare(password, user.password);
        if (!isValidPassword) {
            throw new UnauthorizedException('Contraseña incorrecta');
            }

        const payload = { email:user.email, role: user.role};
        const token = await this.jwtService.signAsync(payload);

        return{
            token,
            email
        };
    }

    async profile({email, role}:{email: string; role: string}) {

        return await this.userService.findOneByEmail(email);
    }
}

