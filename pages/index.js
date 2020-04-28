import {withApollo} from 'react-apollo'
import React from 'react'
import LoginBox from '../components/LoginBox'
import Router from "next/router";

class Index extends React.Component{

    constructor(props) {
        super( props );
       }


    render() {
        return (
        <div>
        <LoginBox />
            <div>
                <button onClick={this.GoToListPage} className={`btn btn-primary btn--full`}>{'LIST'}</button>
            </div>
        </div>
        );
    }

    GoToListPage() {
        Router.push("/list")
    }
}

export default withApollo(Index)