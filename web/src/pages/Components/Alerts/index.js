import React, { useEffect, useRef } from 'react';

 import { Alert } from './styles';

function Alerts(props) {
  const { mensagem, tipo, setMensagem } = props;
  const alertEl = useRef();

  useEffect(()=>{
    if(mensagem){
        alertEl.current.style.display = "block";
    }else{
        alertEl.current.style.display = "none";
    }
  }, [mensagem]);

    return (
    <Alert ref={alertEl} tipo={tipo}>
        <h1>Error</h1>
        <p>{mensagem}</p>
        <div className="svg">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="frown" classname="svgerror" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"></path></svg>
        </div>
        <p>Caso não tenha uma conta, faça o cadastro é gratuito.</p>
        <div>
            {mensagem && (            
            <button type="button" 
                onClick={()=>{
                setMensagem(undefined);
            }}>
                Tentar novamente
            </button>)}
        </div>
        
    </Alert>
    );
}

export default Alerts;