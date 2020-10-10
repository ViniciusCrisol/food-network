import { getRepository, Repository } from 'typeorm';

import ITagsRepository from '@modules/posts/repositories/ITagsRepository';
import Tag from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async findByTitle(title: string): Promise<Tag | undefined> {
    const tag = await this.ormRepository.findOne({ where: { title } });

    return tag;
  }

  public async create(title: string): Promise<Tag> {
    const tag = this.ormRepository.create({ title });

    await this.ormRepository.save(tag);

    return tag;
  }
}

export default TagsRepository;
