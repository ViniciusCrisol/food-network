import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import CreatePostService from './CreatePostService';

let createPost: CreatePostService;

let fakeUsersRepository: FakeUsersRepository;
let fakePostsRepository: FakePostsRepository;
let fakeTagsRepository: FakeTagsRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakePostsRepository = new FakePostsRepository();
    fakeTagsRepository = new FakeTagsRepository();

    createPost = new CreatePostService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeTagsRepository,
    );
  });

  it('should be able to create a new post with a non-existing Tag.', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
    });

    const post = await createPost.execute({
      content: 'Content',
      title: 'Title',
      tag: 'Tag',
      user_id: user.id,
    });

    expect(post).toHaveProperty('id');
  });

  it('should be able to create a new post with an existing Tag.', async () => {
    await fakeTagsRepository.create('Tag');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
    });

    const post = await createPost.execute({
      content: 'Content',
      title: 'Title',
      tag: 'Tag',
      user_id: user.id,
    });

    expect(post).toHaveProperty('id');
  });

  it('not should be able to create a new post with a non-existing user.', async () => {
    await fakeTagsRepository.create('Tag');

    await expect(
      createPost.execute({
        content: 'Content',
        title: 'Title',
        tag: 'Tag',
        user_id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
