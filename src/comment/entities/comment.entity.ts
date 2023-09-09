import { IsNotEmpty } from 'class-validator';
import { Store } from 'src/store/entities/store.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  user_id: number;

  @Column()
  @IsNotEmpty()
  store_id: number;

  @Column({ type: 'int', nullable: true })
  note: number | null;

  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  user: User;

  @ManyToOne(() => Store, (store) => store.comments, { nullable: false })
  store: Store;
}