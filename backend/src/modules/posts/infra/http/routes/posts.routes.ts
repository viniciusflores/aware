import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import TopicsController from '@modules/topics/infra/http/controllers/TopicsController'

const topicsRouter = Router()
const topicsController = new TopicsController()

topicsRouter.use(ensureAuthenticated)

topicsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string().required(),
      latitude: Joi.required(),
      longitude: Joi.required(),
    },
  }),
  topicsController.create,
)

topicsRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.string().required(),
      longitude: Joi.string().required(),
    },
  }),
  topicsController.listByCoordinates,
)

export default topicsRouter
