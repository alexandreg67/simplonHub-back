import { Store } from "src/store/entities/store.entity";
import { Entity, PrimaryColumn } from "typeorm";

@Entity( {name: 'appartenance'})
export class Appartenance { 
    @PrimaryColumn()
    store_id: number;

    @PrimaryColumn()
    category_id: number;
    
    
}
