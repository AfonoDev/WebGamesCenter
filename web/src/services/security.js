import { api } from "./api";

const CHAVE_USUARIO = "@usuario";

export const signIn = (usuario) =>{
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));

    api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
}

export const signOut = () =>{
    localStorage.clear();

    api.defaults.headers.common['Authorization'] = undefined;
}

export const getUsuario = () =>{
    const {usuario} = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    return usuario;
}

export const isSignedIn = () =>{
    const usuario = JSON.parse(localStorage.getItem(CHAVE_USUARIO));

    if(usuario){
        api.defaults.headers.common['Authorization'] = `Bearer ${usuario.token}`;
    }

    return usuario ? true : false;
}