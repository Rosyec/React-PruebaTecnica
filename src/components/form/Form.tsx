import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { User } from "../../interfaces/user";
import { createUser, deleteUser, getUserById, updateUser } from "../../services/users.service";
import { Modal } from "../modal/Modal";

export const Form = ({ title, id, btnDelete }: Props) => {

    const navigate = useNavigate();
    const { onInputChange, onReset, FormState, setFormState, first_name, second_name, avatar, email } = useForm<User>({
        id: '',
        first_name: '',
        second_name: '',
        createdAt: '',
        avatar: '',
        email: ''
    });

    useEffect(() => {
        if (id) {
            loadUserById(id);
        }
        onReset();
    }, [id]);

    const loadUserById = async (id: string) => {
        const user = await getUserById({ ...FormState, id });
        if (user) {
            setFormState({ ...user });
        }
    }

    const update = async () => {
        const result = await updateUser(FormState);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }
    const create = async () => {
        const result = await createUser(FormState);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const delUser = async () => {
        const result = await deleteUser(FormState);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const onSubmit = async () => {
        if (id) {
            update();
        } else {
            create();
        }
    }

    const onDelete = () => {
        delUser();
    }

    return (
        <>
            <div className="col-6">
                <h1> {title} </h1>
                <input className='form-control my-1' onChange={onInputChange} value={first_name} type="text" name="first_name" placeholder='First name' />
                <input className='form-control my-1' onChange={onInputChange} value={second_name} type="text" name="second_name" placeholder='Second name' />
                <input className='form-control my-1' onChange={onInputChange} value={avatar} type="text" name="avatar" placeholder='Avatar' />
                <input className='form-control my-1' onChange={onInputChange} value={email} type="email" name="email" placeholder='Email' />
                <div className="row d-flex justify-content-center mt-3">
                    {
                        (btnDelete) &&
                        <div className="col">
                            <button className="btn btn-danger" style={{ width: '100%' }}  data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                        </div>
                    }
                    <div className="col">
                        <button className='btn btn-success' style={{ width: '100%' }} onClick={onSubmit}> {title} </button>
                    </div>
                </div>
            </div>
            <Modal user={ first_name } onDelete={ onDelete } />
        </>
    )
}

interface Props {
    title: string,
    id?: string,
    btnDelete?: boolean
}