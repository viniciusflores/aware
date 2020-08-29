import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FiGlobe, FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/laranjo.png'
import { Container, Header, Content } from './styles'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'

const Home: React.FC = () => {
  const { user } = useAuth()
  const [locationPermission, setLocationPermission] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [postContent, setPostContent] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocationPermission(true)
        setAccuracy(position.coords.accuracy)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      function showError(error) {
        setLocationPermission(false)
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.log('User denied the request for Geolocation.')
            break
          case error.POSITION_UNAVAILABLE:
            console.log('Location information is unavailable.')
            break
          case error.TIMEOUT:
            console.log('The request to get user location timed out.')
            break
          default:
            console.log('The request to get user location error default')
            break
        }
      },
    )
  }, [])

  const handlePostAction = useCallback(async () => {
    if (postContent.length <= 0) {
      return
    }

    try {
      const dataPost = {
        content: postContent,
        latitude,
        longitude,
        visibility: 'public',
      }

      await api.post('/posts', dataPost)
    } catch (error) {
      console.log(error.message)
    }
  }, [postContent])

  const handlePostContent = useCallback(e => {
    const abc = e.target.value
    setPostContent(abc)
  }, [])

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft size={20} />
        </Link>

        <button type="button" onClick={handlePostAction}>
          Post
        </button>
      </Header>
      <Content>
        <img src={logoImg} alt="Lorem Ipsum" />
        <div className="content">
          <input placeholder="What's happening?" onChange={handlePostContent} />
          <div>
            <FiGlobe />
            Everyone can reply
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Home
