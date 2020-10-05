import { uuid } from 'uuidv4';

import ITagsRepository from '@modules/posts/repositories/ITagsRepository';

import Tag from '../../infra/typeorm/entities/Tag';

class FakeTagsRepository implements ITagsRepository {
  private tags: Tag[] = [];

  public async findByTitle(title: string): Promise<Tag | undefined> {
    const foundedTag = this.tags.find(tag => tag.title === title);

    return foundedTag;
  }

  public async create(title: string): Promise<Tag> {
    const tag = new Tag();

    Object.assign(tag, { id: uuid(), title });

    this.tags.push(tag);

    return tag;
  }
}

export default FakeTagsRepository;
