import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';
import EditPostService from '@modules/posts/services/EditPostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, tag, title } = request.body;
    const user_id = request.user.id;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute({ content, tag, title, user_id });

    return response.json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { content, tag, title } = request.body;
    const post_id = request.params.id;

    const editPostService = container.resolve(EditPostService);

    const {
      author,
      id,
      title: postTitle,
      content: postContent,
    } = await editPostService.execute({
      content,
      title,
      tag,
      post_id,
    });

    return response.json({
      id,
      tag,
      title: postTitle,
      author: author.name,
      content: postContent,
    });
  }
}
