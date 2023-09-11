import { Appartenance } from 'src/appartenance/entities/appartenance.entity';
import { Store } from 'src/store/entities/store.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  category: string;

  @ManyToMany(() => Store, (store) => store.appartenances)
  appartenances: Appartenance[];
}
