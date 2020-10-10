import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import PostsController from '../controllers/PostsController';
import SearchPostsByTitleController from '../controllers/SearchPostsByTitleController';

const postsRouter = Router();
const postsController = new PostsController();
const searchPostsByTitleController = new SearchPostsByTitleController();

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

postsRouter.get('/:id', postsController.show);

postsRouter.put('/:id', ensureAuthenticated, postsController.update);

postsRouter.delete('/:id', postsController.delete);

postsRouter.get('/search/:title', searchPostsByTitleController.index);

export default postsRouter;
