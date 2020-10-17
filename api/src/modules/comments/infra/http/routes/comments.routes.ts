import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import CommentsController from '../controllers/CommentsController';

const commentsRouter = Router();
const commentsController = new CommentsController();
commentsRouter.use(ensureAuthenticated);

commentsRouter.post(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      content: Joi.string().required(),
    },
  }),
  commentsController.create,
);

export default commentsRouter;
