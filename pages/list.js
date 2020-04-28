import {withApollo} from 'react-apollo'
import  gql from 'graphql-tag'
import React from 'react'
import Router from "next/router";

class List extends React.Component{

    constructor(props) {
        super( props );
        this.state = {
            "currentData": null,
        }
    }

    async componentDidMount() {
        let data = await this.props.client.query( {
            fetchPolicy: 'cache-first',
            query: gql`
                    query gameListQuery {
                         gameList {
                                edges {
                                    node {
                                            id
                                            name
                                    }
                                }
                         }
                    }
                  `,
            variables: {}
        } ).then( ({data}) => {
            this.setState({"currentData": data});
            return data
        } )
            .catch( (err) => {
                console.log( err )
                // authSignOut(client)
                return null
            } )

        console.log( "resp", this.state.currentData.gameList);
    }

    render() {
        const currentData = this.state.currentData;
        return (
            <div>
                <div>
                    <button onClick={this.GoHome} className={`btn btn-primary btn--full`}>{'Return'}</button>
                </div>
                {currentData? (currentData.gameList.edges.map( (item) => <h1>{item.node.name}</h1>) ):null}
            </div>
        );
    }


    GoHome() {
        Router.push("/index");
    }
}

export default withApollo(List)