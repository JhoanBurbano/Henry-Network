import { createGlobalStyle } from "styled-components";
// #FAE800
//#1D1D1D
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :root{
    --grey-1: #1D1D1D;
    --grey-2: #302d2d;
    --grey-3: #3d3939;
    --grey-4: #443f3f;
    --grey-5: #504949;
    --grey-9: #f3f3f3;
    --yellow-1: #FAE800;
    --blue-1: #347fd2;
    --blue-2: #d1e7ff;
    --blue-2-50: #d1e7ff11;
    --red-1: #e41c38;
    --box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.1);
    --box-shadow-hover: 0px 5px 25px -5px rgba(0, 0, 0, 0.2);
  }

  html{
    height: 100%;
  }

  body {
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  }

  input,
  button,
  textarea,
  select,
  details {
    font-family: inherit;
  }

  #root{
    display: flex;
    height: 100%;
  }

  .app{
    display: flex;
    flex-direction: column;
    flex: 1;

    .main{
      flex: 1;
      display: flex;

      .main-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 20px;
        position: relative;
        z-index: 1;
        background-color: var(--grey-2);
        height: calc(100vh - 79px);
        overflow-y: auto;
      }
    }
  }

  .layout__title{
    margin-bottom: 30px;
    text-transform: uppercase;
    color: var(--grey-9);
    position: relative;
    font-weight: 900;
    text-align: center;
    
    &::after{
      content: '';
      position: absolute;
      background-color: var(--yellow-1);
      width: 50px;
      height: 10px;
      display: block;
      margin-top: 5px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .layout__description{
    color: #ccc;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 360px){
    .app .main .main-content{
      padding: 10px;
    }
  }
`;

export default GlobalStyle;
