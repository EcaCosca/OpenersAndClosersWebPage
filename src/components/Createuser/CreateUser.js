// import useAxios from 'axios-hooks'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function CreateUser() {
    const [data, getData] = useState( [] );

    useEffect(() => (
        axios
        .get('http://localhost:4000/api/users')
        .then(result => getData(result.data))

    ), [])

        
        return (
            

            <div>
                <h1>here</h1>
                <ul>
                    {
                        data.map(users => (
                            <li>
                                {users.email}
                            </li>
                        ))
                    }
                </ul>

                <div className="row">
                    <div className="col-md-4">
                        form user
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            <li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}


export default CreateUser
