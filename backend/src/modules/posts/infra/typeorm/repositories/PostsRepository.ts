import { Repository, getRepository } from 'typeorm'
import IPostsRepository from '@modules/posts/repositories/IPostsRepository'
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO'
import Post from '@modules/posts/infra/typeorm/entities/Post'
import IFindPostByCoordinatesDTO from '@modules/posts/dtos/IFindPostByCoordinatesDTO'

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>

  constructor() {
    this.ormRepository = getRepository(Post)
  }

  public async create({
    user_id,
    content,
    visibility,
    latitude,
    longitude,
  }: ICreatePostDTO): Promise<Post> {
    const topic = this.ormRepository.create({
      user_id,
      content,
      visibility,
      latitude,
      longitude,
    })

    await this.ormRepository.save(topic)

    return topic
  }

  public async listByCoordinates({
    latitude,
    longitude,
    visibility,
    range,
  }: IFindPostByCoordinatesDTO): Promise<Post[] | undefined> {
    const posts: Post[] = await this.ormRepository.find({
      where: {
        latitude,
        longitude,
        visibility,
      },
    })

    return posts
  }
}

export default PostsRepository
