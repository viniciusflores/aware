import Post from '@modules/posts/infra/typeorm/entities/Post'
import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO'
import IFindPostByCoordinatesDTO from '@modules/posts/dtos/IFindPostByCoordinatesDTO'

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>
  listByCoordinates(
    data: IFindPostByCoordinatesDTO,
  ): Promise<Post[] | undefined>
}
