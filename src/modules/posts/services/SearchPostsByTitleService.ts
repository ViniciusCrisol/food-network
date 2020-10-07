import { injectable, inject } from 'tsyringe';

import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class SearchPostsByTitleService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(title: string): Promise<Post[]> {
    const posts = await this.postsRepository.searchPostsByTitle(title);

    return posts;
  }
}

export default SearchPostsByTitleService;
