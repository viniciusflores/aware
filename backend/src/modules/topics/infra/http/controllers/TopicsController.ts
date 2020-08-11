import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateTopicService from '@modules/topics/services/CreateTopicService'

export default class TopicsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { content, latitude, longitude, date } = request.body

    const createTopicService = container.resolve(CreateTopicService)

    const topic = await createTopicService.execute({
      user_id,
      content,
      latitude,
      longitude,
      date,
    })

    return response.json(topic)
  }
}
