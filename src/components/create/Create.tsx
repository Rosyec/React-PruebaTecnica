import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from '../form/Form'

export const Create = () => {

  const params = useParams();

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {
            ( params.id )
            ?
            <Form title='Edit User' id={ params.id } btnDelete={true}/>
            :
            <Form title='Create User'/>
          }
        </div>
      </div>
    </>
  )
}
