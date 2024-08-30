import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';


@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env'],
			isGlobal: true,
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			url: process.env.DB_URL,
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			autoLoadEntities: true,
			synchronize: false,  // Desactivar sincronización automática
			ssl: process.env.DB_SSL === 'true',
			extra: {
				ssl:
				process.env.DB_SSL === 'true'
				? {
					rejectUnauthorized: false,
					}
					: null,
			}
			// ssl: true,
			// logging: true, // Habilitar logging
		}),
		TypeOrmModule.forFeature([User]),
		UsersModule,
		AuthModule
	]
})
export class AppModule { }
