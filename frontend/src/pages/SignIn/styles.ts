import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  img {
    width: 80px;
    height: 80px;
    margin-top: 50px;
  }

  form {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;

    h1 {
      font-weight: 600;
    }

    button {
      margin-bottom: 10px;
    }

    a {
      color: #312e38;
      text-decoration: none;

      & + a {
        margin-left: 5px;
      }
    }
  }
`

/*
export const DEVICE_SIZE = {
  MOBILE_S: 320,
  MOBILE_M: 375,
  MOBILE_L: 425,
  TABLET: 768,
  LAPTOP: 1024,
  LAPTOP_L: 1440,
  DESKTOP: 2560,
};

export const DEVICE_HEIGHT = {
  MOBILE_S: '540px',
};
*/
