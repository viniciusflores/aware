import React from 'react'
import {
  FiUser,
  FiFeather,
  FiHome,
  FiSearch,
  FiBell,
  FiMail,
  FiTwitter,
} from 'react-icons/fi'
import logoImg from '../../assets/laranjo.png'
import { Container, Header, Content, Footer, NewTweet } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <FiUser size={20} />
        <h1>Home</h1>
        <FiFeather size={20} />
      </Header>
      <Content>
        <img src={logoImg} alt="Lorem Ipsum" />
        <div>
          <span>
            <p>Lorem Ipsum</p>
            @lorem_ipsum ° 5m
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </span>
        </div>
      </Content>
      {/* <Content>
        <img src={logoImg} alt="Lorem Ipsum" />
        <div>
          <span>
            <p>Lorem Ipsum</p>
            @lorem_ipsum ° 5m
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </span>
        </div>
      </Content>
      <Content>
        <img src={logoImg} alt="Lorem Ipsum" />
        <div>
          <span>
            <p>Lorem Ipsum</p>
            @lorem_ipsum ° 5m
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem IpsumLorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </span>
        </div>
      </Content> */}

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
