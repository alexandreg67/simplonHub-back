import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'store'})
export class Store {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    phone: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    number: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    street: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    city: string;

    @Column({ type: 'char', length: 5, nullable: true })
    zip: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    web: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    map: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @Column()
    user_id: number;

    @Column({ nullable: true })
    picture_id: number;
 }
