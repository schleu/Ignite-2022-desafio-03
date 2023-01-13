import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${props => props.theme["gray-100"]};
    font-family: 'Nunito';
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: ${props => props.theme["blue-700"]};
  }
`