import axios from 'axios'
import useAxios from 'axios-hooks'
import React, { Component } from 'react'

function CreateUser() {

    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:4000/api/users'
      )
    
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
            

            
            <div className="row">
                <div className="col-md-4">
                    form user
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        <li>
                            {/* {JSON.stringify(data.email)} */}
                        </li>
                        
                        {
                            {/* this.state.user.map(user => <li>
                                {user.email}
                            </li>) */}
                        }
                    </ul>
                </div>
            </div>
        )
    
}


export default CreateUser
