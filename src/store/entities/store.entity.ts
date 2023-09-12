import { Appartenance } from 'src/appartenance/entities/appartenance.entity';
import { Category } from 'src/category/entities/category.entity';
import { Picture } from 'src/picture/entities/picture.entity';
import { User } from 'src/user/entities/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
  user: any;

  @OneToOne(() => Picture, { nullable: true })
  @JoinColumn({ name: 'picture_id' })
  picture: Picture | null;

  @OneToMany(() => Comment, (comment) => comment.store)
  comments: Comment[];

  @OneToMany(() => Category, (category) => category.stores)
  categories: Category[];

  @OneToMany(() => Appartenance, (appartenance) => appartenance.store)
  appartenances: Appartenance[];
}