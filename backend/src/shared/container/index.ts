import { container } from 'tsyringe'

import '@modules/users/providers'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import ITopicsRepository from '@modules/topics/repositories/ITopicsRepository'
import TopicsRepository from '@modules/topics/infra/typeorm/repositories/TopicsRepositories'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<ITopicsRepository>(
  'TopicsRepository',
  TopicsRepository,
)
