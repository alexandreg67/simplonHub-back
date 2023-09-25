import { Comment } from 'src/comment/entities/comment.entity';
import { Role } from 'src/role/entities/role.entity';
import { Store } from 'src/store/entities/store.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('user')
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

  @ManyToOne(() => Role, (role) => role.id, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => Store, (store) => store.user)
  stores: Store[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
