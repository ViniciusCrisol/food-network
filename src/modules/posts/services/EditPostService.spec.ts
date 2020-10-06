import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import FakePostsRepository from '../repositories/fakes/FakePostsRepository';
import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import EditPostService from './EditPostService';
import CreatePostService from './CreatePostService';

let editPost: EditPostService;
let createPost: CreatePostService;

let fakeUsersRepository: FakeUsersRepository;
let fakePostsRepository: FakePostsRepository;
let fakeTagsRepository: FakeTagsRepository;

describe('EditPost', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakePostsRepository = new FakePostsRepository();
    fakeTagsRepository = new FakeTagsRepository();

    editPost = new EditPostService(fakePostsRepository, fakeTagsRepository);
    createPost = new CreatePostService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeTagsRepository,
    );
  });

  it('should be able to update a new post.', async () => {
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

    const updatedPost = await editPost.execute({
      tag: 'New Tag',
      post_id: post.id,
      title: 'New Title',
    });

    expect(updatedPost.title).toEqual('New Title');
  });

  it('should not be able to update a post with a non-existing post ID.', async () => {
    await expect(
      editPost.execute({
        post_id: 'non-existing-id',
        title: 'New Title',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update a post with a existing Tag.', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
    });

    await fakeTagsRepository.create('New Tag');

    const post = await createPost.execute({
      content: 'Content',
      title: 'Title',
      tag: 'Tag',
      user_id: user.id,
    });

    const updatedPost = await editPost.execute({
      tag: 'New Tag',
      post_id: post.id,
      title: 'New Title',
    });

    expect(updatedPost.title).toEqual('New Title');
  });
});
