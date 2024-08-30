import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class RegisterDto {

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(1)
    name: string;

    @IsEmail()
    email: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8)
    password: string;

    @Transform(({ value }) => value.trim())
    @IsString()
    @MinLength(8)
    repeatPassword: string;

    @IsString()
    codigoInvitacion: string;

    @IsString()
    tarjeta: string;

    @IsString()
    categoria: string;

    @IsString()
    ciudad: string;

    @IsString()
    tipoDocumento: string;

    @IsNumber()
    numeroDocumento: number;

    @IsString()
    numeroCelular: string;

    @IsString()
    genero: string;

    @IsString()
    tipoSangre: string;

    @IsBoolean()
    aceptarTermino: boolean;
}