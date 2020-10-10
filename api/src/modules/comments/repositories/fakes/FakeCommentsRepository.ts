import { uuid } from 'uuidv4';

import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';
import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';
import Comment from '../../infra/typeorm/entities/Comment';

class FakeCommentsRepository implements ICommentsRepository {
  private comments: Comment[] = [];

  public async create(data: ICreateCommentDTO): Promise<Comment> {
    const comment = new Comment();

    Object.assign(comment, { id: uuid(), ...data });

    this.comments.push(comment);

    return comment;
  }

  public async delete(id: string): Promise<void> {
    const comments = this.comments.filter(comment => comment.id !== id);

    this.comments = comments;
  }

  public async save(data: Comment): Promise<Comment> {
    const updatedPosts = this.comments.map(comment => {
      if (comment.id === data.id) return data;

      return comment;
    });

    this.comments = updatedPosts;

    return data;
  }

  public async findById(id: string): Promise<Comment | undefined> {
    const foundedComment = this.comments.find(comment => comment.id === id);

    return foundedComment;
  }
}

export default FakeCommentsRepository;
