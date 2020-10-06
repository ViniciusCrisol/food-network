import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import PostsController from '../controllers/PostsController';

const postsRouter = Router();
const postsController = new PostsController();
postsRouter.use(ensureAuthenticated);

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      tag: Joi.string().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
    },
  }),
  postsController.create,
);

postsRouter.put('/:id', postsController.update);

export default postsRouter;
