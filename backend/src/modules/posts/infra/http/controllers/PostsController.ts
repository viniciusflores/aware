import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreatePostService from '@modules/posts/services/CreatePostService'
import ListPostFromLocationService from '@modules/posts/services/ListPostFromLocationService'

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { content, visibility, latitude, longitude } = request.body

    const createPostService = container.resolve(CreatePostService)

    const post = await createPostService.execute({
      user_id,
      content,
      visibility,
      latitude,
      longitude,
    })

    return response.json(post)
  }

  public async listByCoordinates(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { latitude, longitude, visibility, range } = request.body
    const listPostByCoordinateService = container.resolve(
      ListPostFromLocationService,
    )
    const posts = await listPostByCoordinateService.execute({
      latitude,
      longitude,
      visibility,
      range,
    })
    return response.json(posts)
  }
}
