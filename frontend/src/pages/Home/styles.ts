import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Header = styled.header`
  display: flex;
  top: 0;
  border-bottom: 2px solid gray;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  svg {
    margin: 0 20px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;

    span {
      display: flex;
      flex-direction: row;

      p {
        font-weight: bold;
        margin-right: 5px;
        font-size: 18px;
      }
    }
  }

  img {
    width: 40px;
    height: 40px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  bottom: 0;
  justify-content: space-around;
  border-top: 2px solid gray;

  svg {
    margin-top: 10px;
  }
`
export const NewTweet = styled.button`
  width: 56px;
  height: 56px;
`
