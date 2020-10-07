import { uuid } from 'uuidv4';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IFindPostByTitleAndTagDTO from '@modules/posts/dtos/IFindPostByTitleAndTagDTO';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';

import Post from '../../infra/typeorm/entities/Post';

class FakePostsRepository implements IPostsRepository {
  private posts: Post[] = [];

  public async create(data: ICreatePostDTO): Promise<Post> {
    const post = new Post();

    Object.assign(post, { id: uuid(), ...data });

    this.posts.push(post);

    return post;
  }

  public async delete(id: string): Promise<void> {
    const posts = this.posts.filter(post => post.id !== id);

    this.posts = posts;
  }

  public async list(): Promise<Post[]> {
    return this.posts;
  }

  public async save(data: Post): Promise<Post> {
    const updatedPosts = this.posts.map(post => {
      if (post.id === data.id) return data;

      return post;
    });

    this.posts = updatedPosts;

    return data;
  }

  public async searchPostsByTitle(title: string): Promise<Post[]> {
    const foundedPost = this.posts.filter(post => post.title === title);

    return foundedPost;
  }

  public async findByTitle(title: string): Promise<Post | undefined> {
    const foundedPost = this.posts.find(post => post.title === title);

    return foundedPost;
  }

  public async findById(id: string): Promise<Post | undefined> {
    const foundedPost = this.posts.find(post => post.id === id);

    return foundedPost;
  }

  public async findByTitleAndTag({
    tag,
    title,
  }: IFindPostByTitleAndTagDTO): Promise<Post | undefined> {
    const foundedPost = this.posts.find(
      post => post.tag.title === tag && post.title === title,
    );

    return foundedPost;
  }
}

export default FakePostsRepository;
