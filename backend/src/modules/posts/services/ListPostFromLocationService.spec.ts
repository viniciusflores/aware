import FakePostsRepositories from '@modules/posts/repositories/fakes/FakePostsRepository'
import CreatePostService from '@modules/posts/services/CreatePostService'
import ListPost from '@modules/posts/services/ListPostFromLocationService'

let fakePostsRepository: FakePostsRepositories
let createPost: CreatePostService
let listPost: ListPost

describe('ListPosts', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepositories()
    createPost = new CreatePostService(fakePostsRepository)
    listPost = new ListPost(fakePostsRepository)
  })

  it('Should be able to create a new post', async () => {
    const post1 = await createPost.execute({
      user_id: '1234',
      content: 'Description of post',
      visibility: 'public',
      latitude: -30.02768,
      longitude: -51.22864,
    })

    const post2 = await createPost.execute({
      user_id: '1234',
      content: 'Description of post',
      visibility: 'public',
      latitude: -30.02768,
      longitude: -51.22864,
    })

    const posts = await listPost.execute({
      latitude: -30.02768,
      longitude: -51.22864,
      visibility: 'public',
      range: 'zero',
    })

    expect(posts).toEqual([post1, post2])
  })
})
