import {withApollo} from 'react-apollo'
import React from 'react'
import Router from "next/router";

class Index extends React.Component{

    constructor(props) {
        super( props );
       }


    render() {
        return (
        <div>
            <div>
                <button onClick={this.GoToListPage} className={`btn btn-primary btn--full`}>{'LIST'}</button>
            </div>
            <div>
                <button onClick={this.GoToSignUpPage} className={`btn btn-primary btn--full`}>{'SIGNUP'}</button>
            </div>
        </div>
        );
    }

    GoToListPage() {
        Router.push("/list")
    }


    GoToSignUpPage() {
        Router.push("/sign-up")

    }
}

export default withApollo(Index)