import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserMysqlEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
