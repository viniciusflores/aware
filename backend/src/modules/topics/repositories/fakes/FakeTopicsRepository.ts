import { uuid } from 'uuidv4'
import ITopicsRepository from '@modules/topics/repositories/ITopicsRepository'
import ICreateTopicDTO from '@modules/topics/dtos/ICreateTopicDTO'
import Topic from '@modules/topics/infra/typeorm/entities/Topics'

class FakeTopicsRepository implements ITopicsRepository {
  private appointments: Topic[] = []

  public async create({
    user_id,
    content,
    latitude,
    longitude,
    date,
  }: ICreateTopicDTO): Promise<Topic> {
    const topic = new Topic()

    Object.assign(topic, {
      id: uuid,
      user_id,
      content,
      latitude,
      longitude,
      date,
    })

    this.appointments.push(topic)

    return topic
  }
}

export default FakeTopicsRepository
