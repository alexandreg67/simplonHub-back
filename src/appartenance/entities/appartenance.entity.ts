import { Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'appartenance' })
export class Appartenance {
  @PrimaryColumn()
  store_id: number;

  @PrimaryColumn()
  category_id: number;

  // @ManyToOne(() => Store, (store) => store.id)
  // @JoinColumn({ name: 'store_id' })
  // store: Store;

  // @ManyToOne(() => Category, (category) => category.id)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;
}
