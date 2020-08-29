import FakeTopicsRepositories from '@modules/topics/repositories/fakes/FakeTopicsRepository'
import CreateTopicService from '@modules/topics/services/CreateTopicService'

let fakeTopicsRepository: FakeTopicsRepositories
let createTopic: CreateTopicService

describe('CreateTopic', () => {
  beforeEach(() => {
    fakeTopicsRepository = new FakeTopicsRepositories()
    createTopic = new CreateTopicService(fakeTopicsRepository)
  })

  it('Should be able to create a new topic', async () => {
    const appointment = await createTopic.execute({
      user_id: '1234',
      content: 'Description of topic',
      latitude: '-30.027680',
      longitude: '-51.228640',
      date: new Date(),
    })

    expect(appointment).toHaveProperty('id')
    expect(appointment.user_id).toBe('1234')
    expect(appointment.content).toBe('Description of topic')
    expect(appointment.latitude).toBe('-30.027680')
    expect(appointment.longitude).toBe('-51.228640')
  })
})
