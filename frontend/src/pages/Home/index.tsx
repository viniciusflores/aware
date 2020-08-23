import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiUser,
  FiFeather,
  FiHome,
  FiSearch,
  FiBell,
  FiMail,
  FiHeart,
  FiMessageCircle,
  FiSend,
} from 'react-icons/fi'
import logoImg from '../../assets/laranjo.png'
import { Container, Header, ContentGroup, Content, Footer } from './styles'

const Home: React.FC = () => {
  const abc = false
  const [locationPermission, setLocationPermission] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

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

  return (
    <Container>
      <Header>
        <FiUser size={20} className="profile" />
        <h1> Home </h1>
        <Link to="/post/create">
          <FiFeather size={20} />
        </Link>
      </Header>
      <ContentGroup>
        <Content>
          <img src={logoImg} alt="Lorem Ipsum" />
          <div className="content">
            <strong>
              Lorem Ipsum
              <span> @lorem_ipsum </span>
              <span className="separator" />
              <span> 5 m </span>
            </strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500 s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.It was popularised in
              the 1960 s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            {abc && (
              <div className="icons">
                <span>
                  <FiHeart />
                  10
                </span>
                <span>
                  <FiMessageCircle />
                  10
                </span>
                <span>
                  <FiSend />
                  10
                </span>
              </div>
            )}
          </div>
        </Content>
        <Content>
          <img src={logoImg} alt="Lorem Ipsum" />
          <div className="content">
            <strong>
              Lorem Ipsum
              <span> @lorem_ipsum </span>
              <span className="separator" />
              <span> 5 m </span>
            </strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry is standard dummy text
              ever since the 1500 s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.It was popularised in
              the 1960 s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            {abc && (
              <div className="icons">
                <span>
                  <FiHeart />
                  10
                </span>
                <span>
                  <FiMessageCircle />
                  10
                </span>
                <span>
                  <FiSend />
                  10
                </span>
              </div>
            )}
          </div>
        </Content>
      </ContentGroup>
      <Footer>
        <FiHome size={20} />
        <FiSearch size={20} />
        <FiBell size={20} />
        <FiMail size={20} />
      </Footer>
    </Container>
  )
}

export default Home
