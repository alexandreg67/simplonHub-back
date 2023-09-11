import { Store } from 'src/store/entities/store.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  category: string;

  @ManyToMany(() => Store, (store) => store.categories)
  stores: Store[];
}
