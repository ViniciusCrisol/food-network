import { injectable, inject } from 'tsyringe';

import IPostsRepository from '../repositories/IPostsRepository';
import Post from '../infra/typeorm/entities/Post';

@injectable()
class ListPostsService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(): Promise<Post[]> {
    const posts = await this.postsRepository.list();

    return posts;
  }
}

export default ListPostsService;
