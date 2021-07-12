import axios from 'axios'
import React, { Component } from 'react'

export default class CreateUser extends Component {

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        console.log(res);
    } 

    render() {
        return (
            <div>
                CreateUser
            </div>
        )
    }
}
