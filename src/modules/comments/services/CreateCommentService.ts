import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import ICommentsRepository from '../repositories/ICommentsRepository';
import Comment from '../infra/typeorm/entities/Comment';

interface IRequest {
  post_id: string;
  content: string;
  user_id: string;
}

@injectable()
class CreateCommentService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute({
    content,
    post_id,
    user_id,
  }: IRequest): Promise<Comment> {
    const postExists = await this.postsRepository.findById(post_id);

    if (!postExists) {
      throw new AppError('Post does not exists.');
    }

    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('Author does not exists.');
    }

    const comment = await this.commentsRepository.create({
      content,
      post_id,
      author_id: user_id,
    });

    return comment;
  }
}

export default CreateCommentService;
