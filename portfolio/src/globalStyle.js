import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url('./assets/fonts/Ubuntu-Light.ttf');
    url('./fonts/Ubuntu-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url('./assets/fonts/Ubuntu-Regular.ttf');
    url('./fonts/Ubuntu-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
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
    background: #f4f4f8;
    /*background: #36454f;*/
    color: #4a4e4d;
    /*color: #f4f4f8;*/
    height: 100vh;
    overflow: hidden;
  }
  #root {
    max-width: 80%;
    margin: 0 auto;
    height: 100%;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(50px, 10vh) 1fr minmax(50px, 10vh);
    min-height: 100%;
  }
`

export default Global