import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';
import ITagsRepository from '../repositories/ITagsRepository';

interface IRequest {
  tag: string;
  title: string;
  content: string;
  user_id: string;
}

@injectable()
class CreatePostService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({
    content,
    tag,
    title,
    user_id,
  }: IRequest): Promise<Post> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User does not exists');
    }

    const tagExists = await this.tagsRepository.findByTitle(tag);

    let tag_id = tagExists?.id || '';

    if (!tagExists) {
      const createdTag = await this.tagsRepository.create(tag);

      tag_id = createdTag.id;
    }

    const post = await this.postsRepository.create({
      title,
      tag_id,
      content,
      author_id: userExists.id,
    });

    return post;
  }
}

export default CreatePostService;
