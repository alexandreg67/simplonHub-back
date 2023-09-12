<<<<<<< HEAD
import { Category } from "src/category/entities/category.entity";
import { Store } from "src/store/entities/store.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, } from "typeorm";
=======
import { Category } from 'src/category/entities/category.entity';
import { Store } from 'src/store/entities/store.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
>>>>>>> 7503a664c434b4cf3c624d8a35aeaa0259ce54db

@Entity({ name: 'appartenance' })
export class Appartenance {
  @PrimaryColumn()
  store_id: number;

<<<<<<< HEAD
    @PrimaryColumn()
    category_id: number;

     @ManyToOne(() => Store, (store) => store.appartenances)
=======
  @PrimaryColumn()
  category_id: number;

  @ManyToOne(() => Store, (store) => store.appartenances)
>>>>>>> 7503a664c434b4cf3c624d8a35aeaa0259ce54db
  store: Store;

  @ManyToOne(() => Category, (category) => category.appartenances)
  category: Category;
}

