import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IPostsRepository from '../repositories/IPostsRepository';
import Post from '../infra/typeorm/entities/Post';

@injectable()
class FindPostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.findById(id);

    if (!post) {
      throw new AppError('Post does not exists.');
    }

    return post;
  }
}

export default FindPostService;
