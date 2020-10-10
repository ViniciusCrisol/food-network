import ICreatePostDTO from '../dtos/ICreatePostDTO';

import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  delete(id: string): Promise<void>;
  save(data: Post): Promise<Post>;
  list(): Promise<Post[]>;
  searchByTitle(title: string): Promise<Post[]>;
  findById(id: string): Promise<Post | undefined>;
}
