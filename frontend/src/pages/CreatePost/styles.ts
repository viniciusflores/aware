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

  a {
    text-decoration: none;
    color: #ff9000;
    svg {
      margin: 0 20px;
      height: 25px;
      width: 25px;
    }
  }

  button {
    margin: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff9000;
    width: 60px;
    height: 24px;
    border-radius: 16px;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 10px 10px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  /* position: relative;
  min-height: 100%;
  flex: 0; */
  img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
    }
  }
`
