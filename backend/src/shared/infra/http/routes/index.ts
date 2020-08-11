import { Router } from 'express'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import topicsRouter from '@modules/topics/infra/http/routes/topics.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/topics', topicsRouter)

export default routes
