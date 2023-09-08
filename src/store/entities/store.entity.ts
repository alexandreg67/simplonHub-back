import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('store')
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  number: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  street: string | null;

  @Column({ type: 'varchar', length: 150, nullable: true })
  city: string | null;

  @Column({ type: 'char', length: 5, nullable: true })
  zip: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  web: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  map: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string | null;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  picture_id: number | null;
}