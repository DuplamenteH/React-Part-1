import React, { Component, Fragment } from 'react';
import Header from './Header';


class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <h1>Página não encontrada!!!</h1>
            </Fragment>
        );
    }
}

export default NotFound;