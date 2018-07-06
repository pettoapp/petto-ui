import React from 'react';
import { hydrate } from 'react-emotion';
import { Button, PettoTheme } from 'petto_styleguide';
import { ThemeProvider } from 'emotion-theming';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import Head from '../components/head';
import Nav from '../components/nav';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
    hydrate(window.__NEXT_DATA__.ids);
}

class Index extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        this.timer = startClock(dispatch);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    static getInitialProps({ reduxStore, req }) {
        const isServer = !!req;
        reduxStore.dispatch(serverRenderClock(isServer));

        return {};
    }

    render() {
        return (
            <div>
                <Head title="Home" />
                <Nav />
                <div className="hero">
                    <ThemeProvider theme={PettoTheme}>
                        <Button>YAY</Button>
                    </ThemeProvider>
                    <h1 className="title">Welcome to Next!</h1>
                    <p className="description">
                        To get started, edit <code>pages/index.js</code> and save to reload.
                    </p>

                    <div className="row"> yay </div>
                </div>
            </div>
        );
    }
}

export default connect()(Index);
