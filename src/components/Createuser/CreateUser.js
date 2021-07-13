import axios from 'axios'
import useAxios from 'axios-hooks'
import React, { Component } from 'react'

function CreateUser() {

    const [{ data, loading, error, response }, refetch] = useAxios({
        url: 'http://localhost:4000/api/users',
        method: 'GET',
      });
    
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>
    
    console.log(data);
    console.log(loading);
    console.log(error);
    
    // async componentDidMount() {
    //     const res = await axios.get('http://localhost:4000/api/users');
    //     this.setState({users: res.data});
    //     console.log(this.state.users);
    //     // this.getUsers();
    // } 

    
        return (
            

            <div>
                <h1>here</h1>

                <div className="row">
                    <div className="col-md-4">
                        form user
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            <li>
                                {JSON.stringify(data.email)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}


export default CreateUser
