// create an entity : log for the database access...

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

// create an entity for the database operations
@Entity()
export class Log {
  constructor(id: number, message: string, createdAt: Date) {
    this.id = id;
    this.message = message;
    this.createdAt = createdAt;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;
}
