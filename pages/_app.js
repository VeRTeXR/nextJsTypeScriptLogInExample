import 'cross-fetch/polyfill'
import {GraphQLProvider} from 'graphql-react'
import {withGraphQLApp} from 'next-graphql-react'
import withApollo from '../lib/with-apollo-client'
import {ApolloProvider} from 'react-apollo'
import React from "react";
import App, {Container} from 'next/app'



class MyApp extends App {
    static async getInitialProps(appContext) {
        if (appContext.ctx.req) {
            const cookies = parseCookies( appContext.ctx.req )
        }
        const appProps = await App.getInitialProps( appContext );
        return {...appProps}
    }

    render() {
        const {Component, pageProps, apolloClient} = this.props
        return (
            <Container>
                <ApolloProvider client={apolloClient}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </Container>
        )
    }
}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;
    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });
    return list;
}


export default withApollo( MyApp )