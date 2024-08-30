import { Role } from '../../common/enums/rol.enum';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column( { unique: true, nullable: false})
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ nullable: false, select: false })
  repeatPassword: string;

  @Column( { unique: true, nullable: false})
  codigoInvitacion: string;

  @Column({ nullable: false })
  tarjeta: string;

  @Column({ nullable: false })
  categoria: string;

  @Column({ nullable: false })
  ciudad: string;

  @Column({ nullable: false })
  tipoDocumento: string;

  @Column({ nullable: false })
  numeroDocumento: number;

  @Column({ nullable: false })
  numeroCelular: string;

  @Column({ nullable: false })
  genero: string;

  @Column({ nullable: false })
  tipoSangre: string;

  @Column({ nullable: false })
  aceptarTermino: boolean;

  @Column({ type: 'enum', default: Role.USER, enum: Role})
  role: Role;

  @DeleteDateColumn()
  deletedAt: Date;
}