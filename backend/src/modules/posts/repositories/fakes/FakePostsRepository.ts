import { uuid } from 'uuidv4'
import IPostsRepository from '@modules/posts/repositories/IPostsRepository'
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO'
import Post from '@modules/posts/infra/typeorm/entities/Post'
import IFindPostByCoordinatesDTO from '@modules/posts/dtos/IFindPostByCoordinatesDTO'

class FakePostsRepository implements IPostsRepository {
  private postsDb: Post[] = []

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

    this.postsDb.push(post)

    return post
  }

  public async listByCoordinates(
    data: IFindPostByCoordinatesDTO,
  ): Promise<Post[] | undefined> {
    console.log(this.postsDb)
    const posts = this.postsDb.filter(post => {
      return (
        post.latitude === data.latitude &&
        post.longitude === data.longitude &&
        post.visibility === data.visibility
      )
    })

    return posts
  }
}

export default FakePostsRepository
