import { NestFactory } from '@nestjs/core';
import {
	INestApplication,
	ValidationPipe,
	VersioningType
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
	const app: INestApplication = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');

	/**
	 * Versioning of the api
	 * default version "1"
	 */
	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: ['1']
	});

	app.enableCors();

	/** Configuration:
	 * control the behavior of the
	 * validation process in terms of what
	 * properties are allowed on the validated object
	 */
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true
		})
	);

	/** Integration with Swagger:
	 * simple configuration of the principal module of Nest for Swagger
	 * **DocumentationBuilder**
	 */
	const swaggerConfig: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
		.setTitle('Ado Services')
		.setDescription('Services endpoints of Ado backend')
		.setVersion('1.0')
		.addBearerAuth() // Autorizaciones a los enpoint de las api
		.addServer(`http://localhost:${process.env.PORT || 3000}/`, 'Local environment')
		.addServer('#', 'Staging') //TODO: Add Staging environment
		.addServer('#', 'Production') //TODO: Add Production environment
		.build();

	const swaggerDocument: OpenAPIObject = SwaggerModule.createDocument(
		app,
		swaggerConfig
	);

	SwaggerModule.setup('docs', app, swaggerDocument);

	/** Configuration:
	 * This is for the accepted environment names
	 */
	ConfigModule.forRoot({
		envFilePath: ['.env.dev', '.env.local', '.env.prod', '.env.testing'],
		isGlobal: true
	});

	console.log(`Server running on PORT: ${process.env.PORT|| 3000} `);
	await app.listen(parseInt(process.env.PORT) || 3000);
}

bootstrap();
