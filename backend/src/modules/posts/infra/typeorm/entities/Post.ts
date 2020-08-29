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

@Entity('posts')
class Post {
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
  visibility: string

  @Column('float')
  latitude: number

  @Column('float')
  longitude: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Post
