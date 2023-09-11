import { Picture } from 'src/picture/entities/picture.entity';
import { User } from 'src/user/entities/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Appartenance } from 'src/appartenance/entities/appartenance.entity';
import { Category } from 'src/category/entities/category.entity';

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

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Picture, (picture) => picture.id)
  @JoinColumn({ name: 'picture_id' })
  picture: Picture | null;

  @OneToMany(() => Comment, (comment) => comment.store)
  comments: Comment[];

  @ManyToMany(() => Category, (category) => category.appartenances)
  appartenances: Appartenance[];
}
