import React, { useState, useEffect } from 'react';
import { Button, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap';
import Foto from '../../assets/logo-type-web.png';
import FotoPerfil from '../../assets/user.png';
import Menu from '../Components/ComponentsMenu/Menu';
import Menutopside from '../Components/Menutopside';


import './styles.css';
import { getUsuario } from '../../services/security';
import { api } from '../../services/api';
import { useHistory } from 'react-router-dom';

function Perfil() {
    const history = useHistory();

    const usuarioSessao = getUsuario();

    const [dadosUsuario, setDadosUsuario] = useState({
        primeiro_nome: usuarioSessao.primeiro_nome,
        ultimo_nome: usuarioSessao.ultimo_nome,
        senha: "",
        email: usuarioSessao.email,
        nickname: usuarioSessao.nickname,
        sexo_id: usuarioSessao.sexo_id,
        estado_id: usuarioSessao.estado_id,
    });

    const [sexos, setSexos] = useState([]);
    const [estados, setEstados] = useState([]);
    
    const atualizacao = (e) => {
        e.preventDefault();

        if(dadosUsuario.senha === "" ){
            window.alert("Senha Vazia");
        } else {
            try {
                // console.log(usuarioSessao.id)
                api.put(`/usuarios/${usuarioSessao.id}`, dadosUsuario);
                // if(retorno.status === 201){
                //     return history.push("/home");
                // }

            } catch (error) {
                
            }
        }
    }

    const handlerInput = (e) => {
        setDadosUsuario({ ...dadosUsuario, [e.target.id]: e.target.value });
    }


    useEffect(() => {
        const listarSexos = async () => {
            try {
                const retorno = await api.get("/sexo");

                setSexos(retorno.data)

                console.log(retorno);

            } catch (e) {
                console.log(e)
            }
        }

        listarSexos();
    }, [])

    useEffect(() => {
        const listarEstados = async () => {
            try {
                const retorno = await api.get("/estados")

                setEstados(retorno.data);
            } catch (e) {
                console.log(e)
            }
        }
        listarEstados();
    }, [])



    return <>
        <div className="page-wraper">
            <div className="content-wraper">
                <div className="background-menu-lateral">
                    <Menu />
                </div>
                <div className="content-area">
                    <Menutopside />
                    <div className="container-perfil">
                        <section>
                            <div className="perfil-jogos">
                                <div className="container-jogo-perfil">
                                    <div><img src={FotoPerfil} className="foto-jogo-perfil" alt="" /></div>
                                    <div className="perfil-jogo-container-text text-white"><h6 className="text-center ">Joguinho 1</h6></div>
                                    <div className="svg-normal">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="perfil-perfil">
                                <div className="perfil">
                                    <div className="">
                                        <img src={FotoPerfil} alt="img perfil" className="img-perfil-foto mt-4" />
                                    </div>
                                    <div className="perfil-input">
                                        <Form onSubmit={atualizacao}>
                                            <Row>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="nome" className="text-white">Primeiro Nome</Label>
                                                        <Input
                                                            type="text"
                                                            name="name"
                                                            id="primeiro_nome"
                                                            placeholder="Seu nome"
                                                            value={dadosUsuario.primeiro_nome}
                                                            onChange={handlerInput} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="nome" className="text-white">Ultimo Nome</Label>
                                                        <Input
                                                            type="text"
                                                            name="name"
                                                            id="ultimo_nome"
                                                            placeholder="Seu nome"
                                                            value={dadosUsuario.ultimo_nome}
                                                            onChange={handlerInput} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="nickname" className="text-white">Nick-Name</Label>
                                                        <Input
                                                            type="text"
                                                            name="nickname"
                                                            id="nickname"
                                                            placeholder="Seu Nick-Name"
                                                            value={dadosUsuario.nickname}
                                                            onChange={handlerInput} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="nickname" className="text-white">Senha</Label>
                                                        <Input
                                                            type="text"
                                                            name="senha"
                                                            id="senha"
                                                            placeholder="Sua senha"
                                                            value={dadosUsuario.senha}
                                                            onChange={handlerInput} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="nickname" className="text-white">Ano De Nascimento</Label>
                                                        <Input
                                                            type="text"
                                                            name="nickname"
                                                            id="nickname"
                                                            placeholder="Ano de Nascimento" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="E-mail" className="text-white">E-Mail</Label>
                                                        <Input
                                                            type="email"
                                                            name="E-mail"
                                                            id="email"
                                                            placeholder="Seu nome"
                                                            value={dadosUsuario.email}
                                                            onChange={handlerInput} />
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="sexo" className="text-white">Sexo</Label>
                                                        <Input
                                                            onChange={handlerInput}
                                                            type="select"
                                                            name="sexo"
                                                            id="sexo_id">
                                                            <option value={dadosUsuario.sexo_id}></option>
                                                            {sexos.map(o => (
                                                                <option value={o.id}>{o.nome}</option>
                                                            ))}
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="categoria" className="text-white">Estado</Label>
                                                        <Input
                                                            onChange={handlerInput}
                                                            type="select"
                                                            name="categoria"
                                                            id="estado_id">
                                                            <option value={dadosUsuario.estado_id}>Selecione seu estado</option>
                                                            {estados.map(o => (
                                                                <option value={o.id}>{o.nome}</option>
                                                            ))}
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <div className="text-center">
                                                <Button className="bg-primary text-center">Salvar Alterações</Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Perfil;