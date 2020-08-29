export default interface IFindPostByCoordinatesDTO {
  latitude: number
  longitude: number
  visibility: 'public' | 'friends' | 'private'
  range: string
}
