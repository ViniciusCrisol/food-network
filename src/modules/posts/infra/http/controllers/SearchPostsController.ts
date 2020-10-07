import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchPostsByTitleService from '@modules/posts/services/SearchPostsByTitleService';

export default class SearchPostsController {
  public async title(request: Request, response: Response): Promise<Response> {
    const { title } = request.params;

    const searchbyTitle = container.resolve(SearchPostsByTitleService);

    const posts = await searchbyTitle.execute(title);

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
}
