import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Perfil from './pages/Perfil';
import Jogos from './pages/Jogos';
import Index from './pages/index';
import Login from './pages/login_adm';
import LojaAdm from './pages/loja_adm';
import { isSignedIn } from './services/security';

const PrivateRoute = ({ children, ...rest }) => {
    return <Route {...rest}
        render={({ location }) =>
            isSignedIn() ? (
                children
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
        }
    />;

}


// import { Container } from './styles';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <PrivateRoute exact path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute exact path="/Perfil">
                    <Perfil />
                </PrivateRoute>
                <PrivateRoute exact path="/Loja">
                    <Loja />
                </PrivateRoute>
                <PrivateRoute exact path="/Jogos">
                    <Jogos />
                </PrivateRoute>

                <PrivateRoute exact path="/Login">
                    <Login />
                </PrivateRoute>

                <PrivateRoute exact path="/Loja_adm">
                    <LojaAdm />
                </PrivateRoute>

            </Switch>
        </BrowserRouter>
    );
}

export default Router;