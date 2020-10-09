import { getRepository, Like, Repository } from 'typeorm';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import Post from '../entities/Post';

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async create(data: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create(data);

    await this.ormRepository.save(post);

    return post;
  }

  public async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }

  public async list(): Promise<Post[]> {
    const posts = await this.ormRepository.find({ relations: ['comments'] });

    return posts;
  }

  public async searchByTitle(title: string): Promise<Post[]> {
    const posts = await this.ormRepository.find({
      where: { title: Like(`%${title}%`) },
      relations: ['comments'],
    });

    return posts;
  }

  public async delete(id: string): Promise<void> {
    const post = await this.ormRepository.findOne(id);

    if (!post) return;

    await this.ormRepository.remove(post);
  }

  public async findById(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id);

    return post;
  }
}

export default PostsRepository;
