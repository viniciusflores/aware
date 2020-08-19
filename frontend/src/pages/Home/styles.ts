import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);

  svg {
    margin: 0 20px;
    height: 25px;
    width: 25px;
  }

  svg.profile {
    color: #fff;
    background: #312e38;
    border-radius: 50%;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 10px 10px 0;

  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      display: flex;
      flex-direction: row;
      font-weight: bold;

      span {
        display: flex;
        flex-direction: row;
        font-weight: normal;
        color: #6e677e;
        font-size: 14px;
        margin-left: 5px;
      }

      span.separator {
        width: 2px;
        height: 2px;
        border-radius: 50px;
        background: #222;
      }
    }

    p {
      font-size: 14px;
    }

    div.icons {
      display: flex;

      span {
        margin-left: 20px;
        display: flex;
        align-items: center;
      }

      span:first-child {
        margin-left: 0;
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
  margin-top: 15px;

  svg {
    margin-top: 10px;
  }
`
