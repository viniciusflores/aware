import { uuid } from 'uuidv4'
import IPostsRepository from '@modules/posts/repositories/IPostsRepository'
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO'
import Post from '@modules/posts/infra/typeorm/entities/Post'
import IFindPostByCoordinatesDTO from '@modules/posts/dtos/IFindPostByCoordinatesDTO'

class FakePostsRepository implements IPostsRepository {
  private appointments: Post[] = []

  public async create({
    user_id,
    content,
    visibility,
    latitude,
    longitude,
  }: ICreatePostDTO): Promise<Post> {
    const post = new Post()

    Object.assign(post, {
      id: uuid,
      user_id,
      content,
      visibility,
      latitude,
      longitude,
    })

    this.appointments.push(post)

    return post
  }

  public async listByCoordinates(
    data: IFindPostByCoordinatesDTO,
  ): Promise<Post[]> {
    return this.appointments.filter(a => {
      a.latitude === data.latitude && a.longitude === data.longitude
    })
  }
}

export default FakePostsRepository
