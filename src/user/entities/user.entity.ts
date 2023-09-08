import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    firstname: string;

    @Column({ type: 'varchar', length: 255 })
    pseudo: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    mail: string;

    @Column({ type: 'char', length: 10, nullable: true })
    phone: string | null;

    @Column({ type: 'char', length: 60 })
    password: string;

    @Column({ type: 'date', nullable: true })
    date_in: Date | null;

    @Column({ type: 'date', nullable: true })
    date_out: Date | null;

    @Column()
    role_id: number;

    // @ManyToOne(() => User, user => user.id)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  // @ManyToOne(() => Picture, picture => picture.id, { nullable: true })
  // @JoinColumn({ name: 'picture_id' })
  // picture: Picture | null;
}