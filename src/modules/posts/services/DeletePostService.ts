import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class DeletePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(post_id: string): Promise<void> {
    const postExists = await this.postsRepository.findById(post_id);

    if (!postExists) {
      throw new AppError('Post does not exists.');
    }

    await this.postsRepository.delete(post_id);
  }
}

export default DeletePostService;
