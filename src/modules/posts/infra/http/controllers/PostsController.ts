import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';
import ListPostsServices from '@modules/posts/services/ListPostsServices';
import DeletePostService from '@modules/posts/services/DeletePostService';
import EditPostService from '@modules/posts/services/EditPostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;
    const user_id = request.user.id;

    const createPost = container.resolve(CreatePostService);

    await createPost.execute({ ...data, user_id });

    return response.status(204).json();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPosts = container.resolve(ListPostsServices);

    const posts = await listPosts.execute();

    const serializedPosts = posts.map(post => {
      const { id, title, content, updated_at, author, tag } = post;
      const authorName = author.name;
      const tagTitle = tag.title;

      return { id, tagTitle, title, authorName, updated_at, content };
    });

    return response.json(serializedPosts);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deletePost = container.resolve(DeletePostService);

    await deletePost.execute(request.params.id);

    return response.status(204).json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const post_id = request.params.id;

    const editPostService = container.resolve(EditPostService);

    const post = await editPostService.execute({ ...request.body, post_id });

    const { id, updated_at, tag, title, content, author } = post;
    const authorName = author.name;
    const tagTitle = tag.title;

    const data = { id, tagTitle, title, authorName, updated_at, content };

    return response.json(data);
  }
}
