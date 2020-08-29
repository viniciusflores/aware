import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateTopicService from '@modules/topics/services/CreateTopicService'
import ListTopicFromLocationService from '@modules/topics/services/ListTopicFromLocationService'

export default class TopicsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { content, latitude, longitude } = request.body

    const createTopicService = container.resolve(CreateTopicService)

    const topic = await createTopicService.execute({
      user_id,
      content,
      latitude,
      longitude,
    })

    return response.json(topic)
  }

  public async listByCoordinates(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { latitude, longitude, range } = request.body
    const listTopicByCoordinateService = container.resolve(
      ListTopicFromLocationService,
    )
    const topics = await listTopicByCoordinateService.execute({
      latitude,
      longitude,
      range,
    })
    return response.json(topics)
  }
}
