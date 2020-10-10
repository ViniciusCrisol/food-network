import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICommentsRepository from '../repositories/ICommentsRepository';
import Comment from '../infra/typeorm/entities/Comment';

interface IRequest {
  content: string;
  comment_id: string;
}

@injectable()
class EditCommentService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {}

  public async execute({ content, comment_id }: IRequest): Promise<Comment> {
    const commentExists = await this.commentsRepository.findById(comment_id);

    if (!commentExists) {
      throw new AppError('Comment does not exists.');
    }

    commentExists.content = content;

    this.commentsRepository.save(commentExists);

    return commentExists;
  }
}

export default EditCommentService;
