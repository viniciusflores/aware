export default interface ICreatePostDTO {
  user_id: string
  content: string
  visibility: 'public' | 'friends' | 'private'
  latitude: string
  longitude: string
}
