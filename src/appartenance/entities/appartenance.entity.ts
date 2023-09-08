import { Column, Entity, PrimaryColumn, } from "typeorm";

@Entity( { name : 'appartenance'} )
export class Appartenance {
    @PrimaryColumn()
    store_id: number;

    @PrimaryColumn()
    category_id: number;
}
