import { Store } from 'src/store/entities/store.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  store_id: number;

  @Column({ type: 'int', nullable: true })
  note: number | null;

  //   @ManyToOne(() => User, (user) => user.id)
  //   @JoinColumn({ name: 'user_id' })
  //   user: User;

  //   @ManyToOne(() => Store, (store) => store.id)
  //   @JoinColumn({ name: 'store_id' })
  //   store: Store;
}
