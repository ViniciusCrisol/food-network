import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommentService from '@modules/comments/services/CreateCommentService';

export default class CommentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content } = request.body;
    const user_id = request.user.id;
    const post_id = request.params.id;

    const createComment = container.resolve(CreateCommentService);

    await createComment.execute({ content, post_id, user_id });

    return response.status(204).json();
  }
}
