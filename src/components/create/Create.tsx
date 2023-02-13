import { useParams } from 'react-router-dom';
import { Form } from '../form/Form'

export const Create = () => {

  const params = useParams();

  console.log('Params: ', params)

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <Form/>
        </div>
      </div>
    </>
  )
}
