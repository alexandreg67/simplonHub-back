import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'comment'})
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    store_id: number;

    @Column( {type: 'int', nullable: true})
    note: number;
 }
