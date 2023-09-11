import { Comment } from "src/comment/entities/comment.entity";
import { Role } from "src/role/entities/role.entity";
import { Store } from "src/store/entities/store.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    firstname: string;

    @Column({ type: 'varchar', length: 255 })
    pseudo: string;

    @Column({ type: 'varchar', length: 255 })
    mail: string;

    @Column({ type: 'char', length: 10, nullable: true })
    phone: string;

    @Column({ type: 'char', length: 60 })
    password: string;

    @Column()
    date_in: Date | null;

    @Column()
    date_out: Date | null;

    @Column()
    role_id: number;

    @ManyToOne(() => Role, (role) => role.id)
    @JoinColumn({ name: 'role_id' })
    role: Role;
    
    @OneToMany(() => Store, (store) => store.user)
    stores: Store[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

}
