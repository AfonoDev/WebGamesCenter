import React, {useEffect, useState} from 'react';
import Foto from '../../assets/logo-type-web.png';
import FotoPerfil from '../../assets/gift.jpg';
import { Card, Button, CardTitle, CardText, Row, Col,  Modal, ModalHeader, ModalBody, ModalFooter,Input, Label, FormGroup } from 'reactstrap';

 import './styles.css';
import Menu from '../Components/ComponentsMenu/Menu';
import Menutopside from '../Components/Menutopside';
import { api } from '../../services/api';
import Form from 'reactstrap/lib/Form';
import { getUsuario } from '../../services/security';
import { Link } from 'react-router-dom';

const CardLoja = ({loadingitens, props})=>{

    const usuarioSessao = getUsuario();

      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    const [iten, setItens] = useState([]);

    useEffect(()=>{
        carregaritens();
    },[]);

    const carregaritens = async () =>{
        try {
            const retorno = await api.get(`/loja/2/item`);
            setItens(retorno.data);
        } catch (error) {
            
        }
    }
    return(
        <>
            <div className="card-gift">
                <div className="text-center text-white"><h5 className="mt-3">{loadingitens.nome}</h5></div>
                <div className="container-imagem-gift-card"><img src={FotoPerfil} alt="" className="foto-img-gift-card" /></div>
                <div className="text-center mb-2"><button onClick={toggle} className="input-button">Comprar</button></div>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Comprar Gift Card</ModalHeader>
                    <ModalBody>
                        <div className="border-botton mb-2">Descrição : 
                            <span className="ml-1">
                                { loadingitens.descricao}
                            </span>
                        </div>
                        <h6>Confira seus dados cadastrados <Link to="/perfil"><a>Editar informações</a></Link></h6>
                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="email" disabled="disabled" value={usuarioSessao.email} name="email" id="exampleEmail" placeholder="" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="email" disabled="disabled" value={usuarioSessao.nickname} name="email" id="exampleEmail" placeholder="" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="email" disabled="disabled" value={usuarioSessao.primeiro_nome} name="email" id="exampleEmail" placeholder="" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="email" disabled="disabled" value={usuarioSessao.ultimo_nome} name="email" id="exampleEmail" placeholder="" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <h6>Dados do Cartão</h6>
                            <Row form>
                               
                                <Col md={12}>
                                    <FormGroup>
                                        <Input type="text" name="email" id="nome" placeholder="Nome (como escrito no cartão)" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="text"  name="mesexpiracao" id="mes" placeholder=" Mês de expiração" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="text" name="Anodeexpiracao" id="ano" placeholder="Ano de expiração" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="text" name="codigo" id="codigo" placeholder="Código de segurança" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input type="text" name="numerocartao" id="cartao" placeholder="Número do cartão" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>

                    </ModalBody>
                <ModalFooter>
                    {/* <p>Disponivel {loadingitens.nome}</p> */}
                    <Button color="success" onClick={toggle}>Comprar</Button>
                    <Button color="danger" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

const Loja =(props) =>{

    const [iten, setItens] = useState([]);

    useEffect(()=>{
        carregaritens();
    },[]);

    const carregaritens = async () =>{
        try {
            const retorno = await api.get(`/loja/2/item`);
            setItens(retorno.data);
        } catch (error) {
            
        }
    }

    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
  return <>
       <div className="page-wraper">
            <div className="content-wraper">
                <div className="background-menu-lateral">
                   <Menu />
                </div>
                <div className="content-area">
                   <Menutopside />
                   <section className="scroll-loja">
                       <div className="container">
                            {iten.map((loadingitens)=>(
                                <CardLoja loadingitens={loadingitens} />
                            ))}
                       </div>
                   </section>
                </div>
            </div>
        </div>

  </>;
}

export default Loja;