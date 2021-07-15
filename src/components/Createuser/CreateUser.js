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
                    <li>
                        {
                            data.map(users => (
                                <li>
                                    {users.email}
                                </li>
                            ))
                        }
                    </li>
                </ul>

            </div>
        )
    
}


export default CreateUser
