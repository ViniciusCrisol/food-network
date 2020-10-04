import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IFindPostByTitleAndTagDTO from '../dtos/IFindPostByTitleAndTagDTO';

import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  save(data: ICreatePostDTO): Promise<Post>;
  delete(id: string): Promise<void>;
  findByTitle(title: string): Promise<Post | undefined>;
  findByTitleAndTag(data: IFindPostByTitleAndTagDTO): Promise<Post | undefined>;
}
