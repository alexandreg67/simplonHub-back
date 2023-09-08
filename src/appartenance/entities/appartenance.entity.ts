import { Category } from 'src/category/entities/category.entity';
import { Store } from 'src/store/entities/store.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'appartenance' })
export class Appartenance {
  @PrimaryColumn()
  store_id: number;

  @PrimaryColumn()
  category_id: number;

  @ManyToOne(() => Store, (store) => store.appartenances)
  store: Store;

  @ManyToOne(() => Category, (category) => category.appartenances)
  category: Category;
}
