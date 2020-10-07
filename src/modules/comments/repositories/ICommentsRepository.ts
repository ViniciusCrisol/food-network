import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';
import Comment from '../infra/typeorm/entities/Comment';

export default interface ITagsRepository {
  create(title: ICreateCommentDTO): Promise<Comment>;
  list(): Promise<Comment[]>;
}
