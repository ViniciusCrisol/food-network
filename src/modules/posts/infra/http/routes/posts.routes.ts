import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import PostsController from '../controllers/PostsController';
import SearchPostsController from '../controllers/SearchPostsController';

const postsRouter = Router();
const postsController = new PostsController();
const searchPostsController = new SearchPostsController();

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      tag: Joi.string().required(),
      title: Joi.string().required(),
      content: Joi.string().required(),
    },
  }),
  ensureAuthenticated,
  postsController.create,
);

postsRouter.get('/', postsController.index);

postsRouter.put('/:id', ensureAuthenticated, postsController.update);

postsRouter.delete('/:id', postsController.delete);

postsRouter.get('/search/:title', searchPostsController.title);

export default postsRouter;
