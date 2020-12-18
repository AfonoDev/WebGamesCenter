import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './styles.css';
import logo from '../../assets/logo-type-web.png';
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";
import Alerts  from "../Components/Alerts";

const FormLogin = (props) => {
    const history = useHistory();
    
    const [usuarioLogin, setUsuarioLogin] = useState({
        email: "",
        senha: ""
    });

    const entrar = async (e) => {
        e.preventDefault();

        try {
            const retorno = await api.post("/sessao", usuarioLogin);

            if (retorno.status === 201) {
                // Logar na aplication
                signIn(retorno.data);
                //Redirecionar para a home
                return history.push("/home");
            }
        } catch (erro) {
            if (erro.response) {
                return props.setMensagem(erro.response.data.erro);
            }
            props.setMensagem("ops, algo deu errado, tente mais tarde");
        }

    };

    const handlerInput = (e) => {
        setUsuarioLogin({ ...usuarioLogin, [e.target.id]: e.target.value });
    }

    return (
        <Form onSubmit={entrar} >
            <div className="login">
                <div className="Logo">
                    <img src={logo} alt=""></img>
                </div>

                <div className="inputs">
                    <input
                        className="input"
                        type="email"
                        id="email"
                        value={usuarioLogin.email}
                        onChange={handlerInput}
                        placeholder="E-mail"
                        required
                    />

                    <input
                        className="input"
                        type="password"
                        id="senha"
                        value={usuarioLogin.senha}
                        onChange={handlerInput}
                        placeholder="Senha"
                        requiredrequired
                    />
                    <Button id="input-button">GG!</Button>
                </div>
            </div>
        </Form>
    )
}

const Index = () => {
    const history = useHistory();
    
    const [mensagem, setMensagem] = useState("");

    const [usuarioRegistrar, setUsuarioRegistrar] = useState({
        email: "",
        senha: "",
        primeiro_nome: "",
        ultimo_nome: "",
        nickname: "",
        sexo_id: "",
        estado_id: "",
        confirmesenha: ""
    });

    const [sexos, setSexos] = useState([]);
    const [estados, setEstados] = useState([]);

    const registrar = async (e) => {
        e.preventDefault();

        if (usuarioRegistrar.senha !== usuarioRegistrar.confirmesenha) {
            window.alert("Senha errada");
        } else {
            try {
                const retorno = await api.post("/usuarios", usuarioRegistrar);

                if (retorno.status === 201) {
                    // Vai logar na aplicação
                    signIn(retorno.data);

                    // Redirecionar para a tela home
                    return history.push("/Jogos");
                }
            } catch (erro) {
                if (erro.response) {
                    return window.alert(erro.response.data.erro);
                    // window.alert("erro");
                }
                window.alert("ops, algo deu errado, tente mais tarde");
            }
        }


    }

    const handlerInput = (e) => {
        setUsuarioRegistrar({ ...usuarioRegistrar, [e.target.id]: e.target.value });
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

    return (
        <>
            <div className="corpo-index">
                <div className="lucides">
                    <div className="container">
                    <Alerts mensagem={mensagem} setMensagem={setMensagem} tipo="erro" />
                        <FormLogin  setMensagem={setMensagem}/>
                        {/* <div className="text-center">
                            <button className="mobile-botao text-center ml-2 mt-4">Login</button>
                            <button className="mobile-botao text-center ml-2 mt-4">Registro</button>
                        </div> */}
                        <div className="registro">
                            <div className="register">
                                <h3 className="text-center text-white mb-0">Registre-se</h3>
                                <Form onSubmit={registrar} setMensagem={setMensagem}>
                                    <FormGroup>
                                        <Label for="E-mail" className="text-white">E-mail</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={usuarioRegistrar.email}
                                            placeholder="Ex: João@gmail.com"
                                            onChange={handlerInput} />
                                    </FormGroup>
                                    <Row Form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="Senha" className="text-white">Senha</Label>
                                                <Input
                                                    type="password"
                                                    name="senha"
                                                    id="senha"
                                                    value={usuarioRegistrar.senha}
                                                    placeholder="Insira sua senha"
                                                    onChange={handlerInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="confirmesenha" className="text-white">Confirme sua senha</Label>
                                                <Input
                                                    type="password"
                                                    name="confirmesenha"
                                                    id="confirmesenha"
                                                    value={usuarioRegistrar.confirmesenha}
                                                    placeholder="Confirme sua senha"
                                                    onChange={handlerInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row Form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="primeironome" className="text-white">Primeiro Nome</Label>
                                                <Input
                                                    type="text"
                                                    name="primeironome"
                                                    id="primeiro_nome"
                                                    value={usuarioRegistrar.primeiro_nome}
                                                    placeholder="Insira seu primeiro nome"
                                                    onChange={handlerInput} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="ultimonome" className="text-white">Ultimo Nome</Label>
                                                <Input
                                                    type="text"
                                                    name="ultimonome"
                                                    id="ultimo_nome"
                                                    value={usuarioRegistrar.ultimo_nome}
                                                    placeholder="Insira seu ultimo nome"
                                                    onChange={handlerInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row Form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="categoria" className="text-white">Selecione sua categoria</Label>
                                                <Input type="select" name="categoria" id="categoria">
                                                    <option>Aventura</option>
                                                    <option>Ação</option>
                                                    <option>Tiro</option>
                                                    <option>Mundo Aberto</option>
                                                    <option>Terror</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="nickname" className="text-white">Nick-Name</Label>
                                                <Input
                                                    type="text"
                                                    name="nickname"
                                                    id="nickname"
                                                    value={usuarioRegistrar.nickname}
                                                    placeholder="Insira seu nickname"
                                                    onChange={handlerInput} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row Form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="sexo" className="text-white">Selecione seu sexo</Label>
                                                <Input onChange={handlerInput} type="select" name="sexo" id="sexo_id">
                                                    <option value="">Selecione</option>
                                                    {sexos.map(o => (
                                                        <option value={o.id}>{o.nome}</option>
                                                    ))}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="categoria" className="text-white">Selecione seu estado</Label>
                                                <Input onChange={handlerInput} type="select" name="categoria" id="estado_id">
                                                    <option value="">Selecione seu estado</option>
                                                    {estados.map(o => (
                                                        <option value={o.id}>{o.nome}</option>
                                                    ))}
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup className="text-center">
                                        <button className="input-button">Registrar</button>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div className="divisao"></div>
                            <div className="texto-gamer">
                                <h3 className="text-center">Ola Gamers.</h3>
                                <p>Conecte-se com outros players iguais a você, disposto a procurar aventura e ação dentro da primeira plataforma destinada totalmente a você gamer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;