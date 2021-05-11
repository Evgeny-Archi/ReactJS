import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};
    height: 100vh;
    transition: all .3s linear;
  }
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .contentWrapper {
    margin: 0 10%;
    height: 100%;

    @media screen and (max-width: 1024px) {
      margin: 0 5%;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(50px, 10vh) 1fr minmax(50px, 10vh);
    min-height: 100%;
    position: relative;
  }

  a {
    color: ${(props) => props.theme.linkColor};

    &:hover {
      color: ${(props) => props.theme.linkHover};
    }
  }

  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

`

export default GlobalStyle
