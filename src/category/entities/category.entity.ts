import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'category'})
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {type: 'varchar', length: 150})
    category: string;
 }
