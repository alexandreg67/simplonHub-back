import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ( {name: 'picture'})
export class Picture { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {type: 'varchar', length: 255})
    name: string;

    @Column({type: 'varchar', length: 10})
    type: string;

    @Column( {type: 'varchar', length: 255 })
    path: string;
}
