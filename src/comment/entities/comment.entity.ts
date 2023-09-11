import { Store } from "src/store/entities/store.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Store, (store) => store.id)
    @JoinColumn({ name: 'store_id' })
    store: Store;
 }
