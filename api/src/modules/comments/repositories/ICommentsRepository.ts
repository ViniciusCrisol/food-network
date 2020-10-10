import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';
import Comment from '../infra/typeorm/entities/Comment';

export default interface ITagsRepository {
  create(title: ICreateCommentDTO): Promise<Comment>;
  delete(id: string): Promise<void>;
  save(data: Comment): Promise<Comment>;
  findById(id: string): Promise<Comment | undefined>;
}
