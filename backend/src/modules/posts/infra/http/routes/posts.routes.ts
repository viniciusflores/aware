import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import PostsController from '@modules/posts/infra/http/controllers/PostsController'

const postsRouter = Router()
const postsController = new PostsController()

postsRouter.use(ensureAuthenticated)

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string().required(),
      visibility: Joi.string(),
      latitude: Joi.required(),
      longitude: Joi.required(),
    },
  }),
  postsController.create,
)

postsRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      latitude: Joi.string().required(),
      longitude: Joi.string().required(),
      visibility: Joi.string(),
    },
  }),
  postsController.listByCoordinates,
)

export default postsRouter
