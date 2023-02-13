import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces/user";
import { createUser } from "../../services/users.service";

export const Form = (  ) => {

    const navigate = useNavigate();

    const getInputs = ( inputs: HTMLFormControlsCollection ) => {
        const userObj: User = {
            first_name:     (inputs.namedItem('fname') as HTMLInputElement).value,
            second_name:    (inputs.namedItem('sname') as HTMLInputElement).value,
            avatar:         (inputs.namedItem('avatar') as HTMLInputElement).value,
            email:          (inputs.namedItem('email') as HTMLInputElement).value,
        }
        return userObj;
    }

    const submit = async ( form: React.FormEvent<HTMLFormElement> ) => {
        form.preventDefault();
        const inputs: User = getInputs( form.currentTarget.elements );
        const result = await createUser(inputs);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

  return (
    <>
    <div className="col-6">
        <h1>Create User</h1>
        <form onSubmit={ submit } className='form-group'>
            <input className='form-control my-1' type="text" name="fname" placeholder='First name'/>
            <input className='form-control my-1' type="text" name="sname" placeholder='Second name'/>
            <input className='form-control my-1' type="text" name="avatar" placeholder='Avatar'/>
            <input className='form-control my-1' type="email" name="email" placeholder='Email'/>
            <div className="row">
                <button className='btn btn-danger mt-3'>Cancel</button>
                <button className='btn btn-success mt-1' type="submit">Save</button>
            </div>
        </form>
    </div>
    </>
  )
}