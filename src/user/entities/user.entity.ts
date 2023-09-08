import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  firstname: string;

  @Column({ type: 'varchar', length: 255 })
  pseudo: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  mail: string;

  @Column({ type: 'char', length: 10, nullable: true })
  phone: string | null;

  @Column({ type: 'char', length: 60 })
  password: string;

  @Column({ type: 'date', nullable: true })
  date_in: Date | null;

  @Column({ type: 'date', nullable: true })
  date_out: Date | null;

  @Column()
  role_id: number;

  // @ManyToOne(() => Role, role => role.id)
  // @JoinColumn({ name: 'role_id' })
  // role: Role;
}
