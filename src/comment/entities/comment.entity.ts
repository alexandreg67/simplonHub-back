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

<<<<<<< HEAD
    @Column({ type: 'int', nullable: true })
    note: number | null;
  user: any;

  
  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  user: User;

=======
  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  user: User;

>>>>>>> 7503a664c434b4cf3c624d8a35aeaa0259ce54db
  @ManyToOne(() => Store, (store) => store.comments, { nullable: false })
  store: Store;
}