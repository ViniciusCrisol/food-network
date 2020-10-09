import { getRepository, Repository } from 'typeorm';

import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';
import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';
import Comment from '../entities/Comment';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create(data: ICreateCommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create(data);

    await this.ormRepository.save(comment);

    return comment;
  }

  public async save(comment: Comment): Promise<Comment> {
    return this.ormRepository.save(comment);
  }

  public async delete(id: string): Promise<void> {
    const comment = await this.ormRepository.findOne(id);

    if (!comment) return;

    await this.ormRepository.remove(comment);
  }

  public async findById(id: string): Promise<Comment | undefined> {
    const comment = await this.ormRepository.findOne(id);

    return comment;
  }
}

export default CommentsRepository;
