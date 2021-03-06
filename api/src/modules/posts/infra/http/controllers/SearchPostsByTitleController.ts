import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SearchPostsByTitleService from '@modules/posts/services/SearchPostsByTitleService';

export default class SearchPostsByTitleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const searchbyTitle = container.resolve(SearchPostsByTitleService);

    const posts = await searchbyTitle.execute(request.params.title);

    const serializedPosts = posts.map(post => {
      const { id, title, content, updated_at, author, tag } = post;
      const authorName = author.name;
      const tagTitle = tag.title;

      return { id, tagTitle, title, authorName, updated_at, content };
    });

    return response.json(serializedPosts);
  }
}
