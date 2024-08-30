import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '@src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constants';

@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret || 'yourSecretKey',
      signOptions: { expiresIn: '1h' },
    }),
    JwtModule.register({
      global: false, // Importante para no interferir con la otra configuración
      secret: jwtConstants.refreshSecret || 'yourRefreshTokenSecretKey',
      signOptions: { expiresIn: '7d' }, // Configuración para refresh token
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
