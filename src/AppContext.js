import React, { Component } from 'react'

export const AppContext = React.createContext();

export default class AppProvider extends Component {

    constructor(props) {
        super(props)
        this.state ={

        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
