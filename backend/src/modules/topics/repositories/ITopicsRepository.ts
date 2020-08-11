import Topics from '@modules/topics/infra/typeorm/entities/Topics'
import ICreateTopicDTO from '@modules/topics/dtos/ICreateTopicDTO'

export default interface ITopicsRepository {
  create(data: ICreateTopicDTO): Promise<Topics>
}
