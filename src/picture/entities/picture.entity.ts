import { Store } from 'src/store/entities/store.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from 'typeorm';

@Entity('picture')
export class Picture {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 10 })
    type: string;

    @Column({ type: 'varchar', length: 255 })
    path: string;

      @OneToOne(() => Store, (store) => store.picture, { nullable: true })
  @JoinColumn({ name: 'store_id' })
  store: Store | null;
}