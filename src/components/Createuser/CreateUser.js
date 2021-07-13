import axios from 'axios'
import useAxios from 'axios-hooks'
import React, { useState, useEffect } from 'react'

function CreateUser() {

    const [{ data, loading, error, response }, refetch] = useAxios({
        url: 'http://localhost:4000/api/users',
        method: 'GET',
      });
      const [text, setText] = useState('');


      useEffect(() => {
          if (data) {
              setText(data.email);
          }else if (error) {
              setText=(error.message);
          }
      }, [data, error]);

      console.table(data);
    
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
                                {JSON.stringify(data)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}


export default CreateUser
