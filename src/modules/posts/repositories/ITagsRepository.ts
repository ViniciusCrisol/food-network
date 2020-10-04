import Tag from '../infra/typeorm/entities/Tag';

export default interface ITagsRepository {
  create(title: string): Promise<Tag>;
  findByTitle(title: string): Promise<Tag | undefined>;
}
