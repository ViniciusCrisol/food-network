import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, tag, title } = request.body;
    const user_id = request.user.id;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute({ content, tag, title, user_id });

    return response.json(post);
  }
}
