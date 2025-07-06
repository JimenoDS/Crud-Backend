import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ nullable: true })
  unidad: string;

  // ✅ COLUMNA AÑADIDA
  @Column({ type: 'decimal', precision: 10, scale: 3, nullable: true })
  peso: number;

  // ✅ COLUMNA AÑADIDA
  @Column({ nullable: true })
  unidadPeso: string;
}