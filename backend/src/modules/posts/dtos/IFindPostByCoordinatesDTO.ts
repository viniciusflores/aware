export default interface IFindPostByCoordinatesDTO {
  latitude: string
  longitude: string
  visibility: 'public' | 'friends' | 'private'
  range: string
}
