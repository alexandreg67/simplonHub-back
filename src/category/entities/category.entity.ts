import { Appartenance } from "src/appartenance/entities/appartenance.entity";
import { Store } from "src/store/entities/store.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  category: string;

    @OneToMany(() => Store, (store) => store.categories)
  stores: Store[];

  @OneToMany(() => Appartenance, (appartenance) => appartenance.category)
  appartenances: Appartenance[];
}