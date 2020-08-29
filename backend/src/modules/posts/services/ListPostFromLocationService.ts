import { injectable, inject } from 'tsyringe'
import Post from '@modules/posts/infra/typeorm/entities/Post'
import IPostRepository from '@modules/posts/repositories/IPostsRepository'

interface IRequest {
  latitude: string
  longitude: string
  visibility: 'public' | 'friends' | 'private'
  range: string
}

@injectable()
class ListPostFromLocationService {
  constructor(
    @inject('PostsRepository') private postsRepository: IPostRepository,
  ) {}

  public async execute({
    latitude,
    longitude,
    visibility,
    range,
  }: IRequest): Promise<Post[]> {
    const posts = await this.postsRepository.listByCoordinates({
      latitude,
      longitude,
      visibility,
      range,
    })

    return posts
  }
}

export default ListPostFromLocationService
