import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IFindPostByTitleAndTagDTO from '../dtos/IFindPostByTitleAndTagDTO';

import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  save(data: Post): Promise<Post>;
  delete(id: string): Promise<void>;
  findById(Id: string): Promise<Post | undefined>;
  findByTitle(title: string): Promise<Post | undefined>;
  findByTitleAndTag(data: IFindPostByTitleAndTagDTO): Promise<Post | undefined>;
}
