import FakePostsRepositories from '@modules/posts/repositories/fakes/FakePostsRepository'
import CreatePostService from '@modules/posts/services/CreatePostService'

let fakePostsRepository: FakePostsRepositories
let createPost: CreatePostService

describe('CreatePost', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepositories()
    createPost = new CreatePostService(fakePostsRepository)
  })

  it('Should be able to create a new post', async () => {
    const post = await createPost.execute({
      user_id: '1234',
      content: 'Description of post',
      visibility: 'public',
      latitude: -30.02768,
      longitude: -51.22864,
    })

    expect(post).toHaveProperty('id')
    expect(post.user_id).toBe('1234')
    expect(post.content).toBe('Description of post')
    expect(post.visibility).toBe('public')
    expect(post.latitude).toBe(-30.02768)
    expect(post.longitude).toBe(-51.22864)
  })
})
