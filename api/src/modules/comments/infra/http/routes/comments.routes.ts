import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import CommentsController from '../controllers/CommentsController';

const commentsRouter = Router();
const commentsController = new CommentsController();
commentsRouter.use(ensureAuthenticated);

commentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      post_id: Joi.string().required(),
      content: Joi.string().required(),
    },
  }),
  commentsController.create,
);

export default commentsRouter;
