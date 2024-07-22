import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    getUsers = async () => {
        var response = await fetch(
            'api/users',
            {
                method: 'get'
            }
        )

        var responsejson = await response.json();
        console.log(responsejson);
        this.setState({
            users: responsejson
        });
    }

    render() {
        const users = this.state.users.map((item, index) => <li key={index}>{item.name}</li>)

        return (
            <div className='App'>
                <button onClick={this.getUsers}>Загрузить список пользователей</button>
                <ul>{users}</ul>
            </div>
        );
    }
}


export default App;
