import styled from 'styled-components';

export const Alert = styled.div`

  position: absolute;
  margin-top: 25vh;
  margin-left: 20vw;
  margin-right: auto;
  width: 350px;
  height: 350px;
  transition: 0.5s;
  z-index: 10;
  box-shadow: 30px 40px 30px 50px rgba(0, 0, 0, 0.7);
  background-color: ${(props) =>
    props.tipo === "sucesso" ? "var(--alertSucesso)" : "var(--alertErro)"};

  > h1 {
    font-size: 30px;
    font-weight: 500;
    margin: 10px;
    text-align: center;
    color: var(--red-chat);
  }
  > p {
    font-size: 20px;
    text-align: center;
    color: var(--white);
  }
  > .svg{
    width: 50px;
    height: 50px;
    margin-left:auto;
    margin-right:auto;
    > svg {
    color: var(--white);
    font-size: 10px;
    }
  }

  > div{
    width: 130px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    > button{
    width: 150px;
    height: 35px;
    background-color: var(--primary);
    outline: none;
    color:  var(--white);
    border: none;
    text-align: center;
    
  }
  }
`;
