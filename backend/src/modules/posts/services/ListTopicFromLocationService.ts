import { injectable, inject } from 'tsyringe'
import ITopicsRepository from '../repositories/ITopicsRepository'
import Topics from '../infra/typeorm/entities/Topics'

interface IRequest {
  latitude: string
  longitude: string
  range: string
}

@injectable()
class ListTopicFromLocationService {
  constructor(
    @inject('TopicsRepository') private topicsRepository: ITopicsRepository,
  ) {}

  public async execute({
    latitude,
    longitude,
    range,
  }: IRequest): Promise<Topics[]> {
    const topics = await this.topicsRepository.listByCoordinates({
      latitude,
      longitude,
      range,
    })

    return topics
  }
}

export default ListTopicFromLocationService
