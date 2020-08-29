import { injectable, inject } from 'tsyringe'
import Post from '@modules/posts/infra/typeorm/entities/Post'
import IPostRepository from '@modules/posts/repositories/IPostsRepository'

interface IRequest {
  user_id: string
  content: string
  visibility: 'public' | 'friends' | 'private'
  latitude: number
  longitude: number
}

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postRepository: IPostRepository,
  ) {}

  public async execute({
    user_id,
    content,
    visibility,
    latitude,
    longitude,
  }: IRequest): Promise<Post> {
    const post = await this.postRepository.create({
      user_id,
      content,
      visibility,
      latitude,
      longitude,
    })

    return post
  }
}

export default CreatePostService
