import { Appartenance } from 'src/appartenance/entities/appartenance.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  category: string;

  @OneToMany(() => Appartenance, (appartenance) => appartenance.category)
  categorys: Category[];
}
