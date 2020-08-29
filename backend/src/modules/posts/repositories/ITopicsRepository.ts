import Topics from '@modules/topics/infra/typeorm/entities/Topics'
import ICreateTopicDTO from '@modules/topics/dtos/ICreateTopicDTO'
import IFindTopicByCoordinatesDTO from '../dtos/IFindTopicByCoordinatesDTO'

export default interface ITopicsRepository {
  create(data: ICreateTopicDTO): Promise<Topics>
  listByCoordinates(data: IFindTopicByCoordinatesDTO): Promise<Topics[]>
}
