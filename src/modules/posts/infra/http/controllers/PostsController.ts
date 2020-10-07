import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostsServices from '@modules/posts/services/ListPostsServices';
import EditPostService from '@modules/posts/services/EditPostService';
import DeletePostService from '@modules/posts/services/DeletePostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, tag, title } = request.body;
    const user_id = request.user.id;

    const createPost = container.resolve(CreatePostService);

    const { id } = await createPost.execute({ content, tag, title, user_id });

    return response.json({ id, title, tag, content });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPosts = container.resolve(ListPostsServices);

    const posts = await listPosts.execute();

    const serializedPosts = posts.map(post => {
      const { id, title: postTitle, author, content, tag, created_at } = post;

      return {
        id,
        tag: tag.title,
        title: postTitle,
        author: author.name,
        created_at,
        content,
      };
    });

    return response.json(serializedPosts);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePost = container.resolve(DeletePostService);

    await deletePost.execute(id);

    return response.status(204).json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { content, tag, title } = request.body;
    const post_id = request.params.id;

    const editPostService = container.resolve(EditPostService);

    const { id, author } = await editPostService.execute({
      tag,
      title,
      post_id,
      content,
    });

    return response.json({
      id,
      tag,
      title,
      author: author.name,
      content,
    });
  }
}
