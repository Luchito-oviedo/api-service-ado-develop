export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    codigoInvitacion: string;
    tarjeta: string;
    categoria: string;
    ciudad: string;
    tipoDocumento: string;
    numeroDocumento: number;
    numeroCelular: string;
    genero: string;
    tipoSangre: string;
    aceptarTermino: boolean;

}
