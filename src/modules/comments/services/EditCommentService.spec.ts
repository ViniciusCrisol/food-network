import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakePostsRepository from '@modules/posts/repositories/fakes/FakePostsRepository';
import FakeTagsRepository from '@modules/posts/repositories/fakes/FakeTagsRepository';
import CreatePostService from '@modules/posts/services/CreatePostService';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import CreateCommentService from './CreateCommentService';
import EditCommentService from './EditCommentService';

let editComment: EditCommentService;
let createComment: CreateCommentService;
let createPost: CreatePostService;

let fakeUsersRepository: FakeUsersRepository;
let fakeCommentsRepository: FakeCommentsRepository;
let fakePostsRepository: FakePostsRepository;
let fakeTagsRepository: FakeTagsRepository;

describe('EditComment', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCommentsRepository = new FakeCommentsRepository();
    fakePostsRepository = new FakePostsRepository();
    fakeTagsRepository = new FakeTagsRepository();

    editComment = new EditCommentService(fakeCommentsRepository);

    createPost = new CreatePostService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeTagsRepository,
    );
  });

  it('should be able to edit comment.', async () => {
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

    createComment = new CreateCommentService(
      fakeUsersRepository,
      fakePostsRepository,
      fakeCommentsRepository,
    );

    const comment = await createComment.execute({
      user_id: user.id,
      post_id: post.id,
      content: 'Content',
    });

    const updatedComment = await editComment.execute({
      comment_id: comment.id,
      content: 'New Content.',
    });

    expect(updatedComment.content).toEqual('New Content.');
  });

  it('should not be able to edit a non-existing comment.', async () => {
    await expect(
      editComment.execute({
        comment_id: 'non-existing-id',
        content: 'New Content.',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
