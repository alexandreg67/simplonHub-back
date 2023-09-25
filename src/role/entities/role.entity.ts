import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'role'})
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20 })
    role: string;

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}
