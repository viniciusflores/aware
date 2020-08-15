import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm'

import User from '@modules/users/infra/typeorm/entities/User'

@Entity('topics')
class Topics {
  @PrimaryGeneratedColumn()
  id: string

  @Column('varchar')
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column('varchar')
  content: string

  @Column('varchar')
  latitude: string

  @Column('varchar')
  longitude: string

  @Column('timestamp with time zone')
  date: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Topics
