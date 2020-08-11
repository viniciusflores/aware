import { injectable, inject } from 'tsyringe'
import Topic from '@modules/topics/infra/typeorm/entities/Topics'
import ITopicsRepository from '@modules/topics/repositories/ITopicsRepository'

interface IRequest {
  user_id: string
  content: string
  latitude: string
  longitude: string
  date: Date
}

@injectable()
class CreateTopicService {
  constructor(
    @inject('TopicsRepository')
    private topicsRepository: ITopicsRepository,
  ) {}

  public async execute({
    user_id,
    content,
    latitude,
    longitude,
    date,
  }: IRequest): Promise<Topic> {
    const topic = await this.topicsRepository.create({
      user_id,
      content,
      latitude,
      longitude,
      date,
    })

    return topic
  }
}

export default CreateTopicService
