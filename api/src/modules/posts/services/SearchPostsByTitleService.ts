import { injectable, inject } from 'tsyringe';

import IPostsRepository from '../repositories/IPostsRepository';
import Post from '../infra/typeorm/entities/Post';

@injectable()
class SearchPostsByTitleService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(title: string): Promise<Post[]> {
    const posts = await this.postsRepository.searchByTitle(title);

    return posts;
  }
}

export default SearchPostsByTitleService;
