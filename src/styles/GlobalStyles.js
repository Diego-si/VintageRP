import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-image: linear-gradient(to top, #2B1480, #4D1181 ,#9F1BD7,#9F1BD7);
  }
  html, body, #root {
    height: 100%;
  }
  button {
    cursor: pointer;
    background: ${colors.octavColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover {
    filter: brightness(85%);
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }
  h1 {
    font-size: 18px;
    text-align: grid;
    color: ${colors.ninthColor};
  }
  p {
    font-size: 18px;
    text-align: center;
    color: ${colors.primaryColor};
  }
  ul {
    list-style:  none;
  }
`;
export const Page4 = styled.section`
  max-width: 80%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
