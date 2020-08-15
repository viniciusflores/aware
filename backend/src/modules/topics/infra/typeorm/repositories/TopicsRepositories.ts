import { Repository, getRepository } from 'typeorm'
import ITopicsRepository from '@modules/topics/repositories/ITopicsRepository'
import ICreateTopicDTO from '@modules/topics/dtos/ICreateTopicDTO'
import Topic from '@modules/topics/infra/typeorm/entities/Topics'
import IFindTopicByCoordinatesDTO from '@modules/topics/dtos/IFindTopicByCoordinatesDTO'

class TopicsRepositories implements ITopicsRepository {
  private ormRepository: Repository<Topic>

  constructor() {
    this.ormRepository = getRepository(Topic)
  }

  public async create({
    user_id,
    content,
    latitude,
    longitude,
    date,
  }: ICreateTopicDTO): Promise<Topic> {
    const topic = this.ormRepository.create({
      user_id,
      content,
      latitude,
      longitude,
      date,
    })

    await this.ormRepository.save(topic)

    return topic
  }

  public async listByCoordinates({
    latitude,
    longitude,
    range,
  }: IFindTopicByCoordinatesDTO): Promise<Topic[]> {
    let topics: Topic[]
    topics = await this.ormRepository.find({
      where: {
        latitude,
        longitude,
      },
    })

    return topics
  }
}

export default TopicsRepositories
