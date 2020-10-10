import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakePostsRepository from '@modules/posts/repositories/fakes/FakePostsRepository';
import FakeTagsRepository from '@modules/posts/repositories/fakes/FakeTagsRepository';
import CreatePostService from '@modules/posts/services/CreatePostService';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import CreateCommentService from './CreateCommentService';

let createComment: CreateCommentService;
let createPost: CreatePostService;

let fakeUsersRepository: FakeUsersRepository;
let fakeCommentsRepository: FakeCommentsRepository;
let fakePostsRepository: FakePostsRepository;
let fakeTagsRepository: FakeTagsRepository;

describe('CreateComment', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCommentsRepository = new FakeCommentsRepository();
    fakePostsRepository = new FakePostsRepository();
    fakeTagsRepository = new FakeTagsRepository();

    createComment = new CreateCommentService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeCommentsRepository,
    );

    createPost = new CreatePostService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeTagsRepository,
    );
  });

  it('should be able to create a new comment.', async () => {
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

    const comment = await createComment.execute({
      user_id: user.id,
      post_id: post.id,
      content: 'Content',
    });

    expect(comment).toHaveProperty('id');
  });

  it('should not be able to create a new comment with a non-existing post.', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      password: 'password',
      email: 'john@example.com',
    });

    expect(
      createComment.execute({
        user_id: user.id,
        post_id: 'non-existing post',
        content: 'Content',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new comment with a non-existing author.', async () => {
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

    expect(
      createComment.execute({
        user_id: 'non-existing author',
        post_id: post.id,
        content: 'Content',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
