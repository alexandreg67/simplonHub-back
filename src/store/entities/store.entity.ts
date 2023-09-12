import { Appartenance } from "src/appartenance/entities/appartenance.entity";
import { Category } from "src/category/entities/category.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { Picture } from "src/picture/entities/picture.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'store' })
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  street: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  city: string;

  @Column({ type: 'char', length: 5, nullable: true })
  zip: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  web: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  map: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  picture_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Picture, (picture) => picture.id)
  @JoinColumn({ name: 'picture_id' })
  picture: Picture | null;

  @OneToMany(() => Comment, (comment) => comment.store)
  comments: Comment[];

  @ManyToMany(() => Category, (category) => category.stores, { eager: true })
  @JoinTable({
    name: 'appartenance', // nom de la table de jointure
    joinColumn: { name: 'store_id', referencedColumnName: 'id' }, // colonne de cette entité
    inverseJoinColumn: { name: 'category_id', referencedColumnName: 'id' }, // colonne de l'entité cible
  })
  categories: Category[];
}
