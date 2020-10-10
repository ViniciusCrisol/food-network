import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IPostsRepository from '../repositories/IPostsRepository';
import ITagsRepository from '../repositories/ITagsRepository';
import Post from '../infra/typeorm/entities/Post';

interface IRequest {
  tag?: string;
  title?: string;
  content?: string;
  post_id: string;
}

@injectable()
class EditPostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({
    content,
    tag,
    title,
    post_id,
  }: IRequest): Promise<Post> {
    const post = await this.postsRepository.findById(post_id);

    if (!post) {
      throw new AppError('Post does not exists');
    }

    let tag_id = '';

    if (tag) {
      const tagExists = await this.tagsRepository.findByTitle(tag);

      if (!tagExists) {
        const createdTag = await this.tagsRepository.create(tag);

        tag_id = createdTag.id;
      } else {
        tag_id = tagExists.id;
      }
    }

    const updatedPost = await this.postsRepository.save({
      ...post,
      title: title || post.title,
      content: content || post.content,
      tag_id: tag ? tag_id : post.tag_id,
    });

    return updatedPost;
  }
}

export default EditPostService;
