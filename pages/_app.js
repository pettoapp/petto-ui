import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';

class PettoApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return (
            <Container>
                <Provider store={reduxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withReduxStore(PettoApp);
