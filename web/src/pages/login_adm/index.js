import React from 'react';
import FotoLogin from '../../assets/login.jpeg';
import LogoWeb from '../../assets/logo-type-web.png';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';
// import { Container } from './styles';

function login_adm() {
  return <>
    <div className="caixa-login">
        <div className="container-itens-login"> 
            <div className="container-area-login">
              <div className="imagem-logo-web-login"><img src={LogoWeb} alt={'FotoLogo'} /></div>
              <h5 className="text-center">Entrar</h5>
              <div className="login-caixa">
                <Form>
                  <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="E-mail" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" name="email" id="Senha" placeholder="Senha" />
                  </FormGroup>
                  <button className="input-button">Entrar</button>
                  <a href="/home" className="ml-3">Voltar ao site</a>
                </Form>
              </div>
            </div>
            <div className="container-area-imagem">

            </div>
        </div>
    </div>  
  </>;
}

export default login_adm;