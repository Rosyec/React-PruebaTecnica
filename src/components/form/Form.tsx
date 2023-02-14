import { useEffect } from "react";
import { useCrud } from "../../hooks/useCrud";
import { useForm } from "../../hooks/useForm";
import { User } from "../../interfaces/user";
import { getRandomImage, getUserById } from "../../services/users.service";
import { Modal } from "../modal/Modal";
import { useQuery } from "react-query";

export const Form = ({ title, id, btnDelete }: Props) => {
    
    const { onInputChange, onReset, FormState, setFormState, first_name, second_name, avatar, email } = useForm<User>({
        id: '',
        first_name: '',
        second_name: '',
        createdAt: '',
        avatar: '',
        email: ''
    });
    const getImageQuery = useQuery('getImage', getRandomImage);
    const { createU, updateU, deleteU } = useCrud({ state: FormState });

    useEffect(() => {
        if (id) {
            loadUserById(id);
        }
        onReset();
    }, [id]);

    useEffect(() => {
        getImage();
    }, []);

    const loadUserById = async (id: string) => {
        const user = await getUserById({ ...FormState, id });
        if (user) {
            setFormState({ ...user });
        }
    }

    const getImage = async () => {
        const result =  getImageQuery.data || [];
        if (result.length > 0) {
            const [ data ] = result;
            setFormState( { ...FormState, avatar: data.urls.regular } );
        }
    }

    const onSubmit = async () => {
        if (id) {
            updateU();
        } else {
            createU();
        }
    }

    const onDelete = () => {
        deleteU();
    }

    return (
        <>
            <div className="col-6">
                <h1> {title} </h1>
                <input className='my-1' onChange={onInputChange} value={first_name} type="text" name="first_name" placeholder='First name' />
                <input className='my-1' onChange={onInputChange} value={second_name} type="text" name="second_name" placeholder='Second name' />
                <input className='my-1' onChange={onInputChange} value={avatar} type="text" name="avatar" placeholder='Avatar' />
                <input className='my-1' onChange={onInputChange} value={email} type="email" name="email" placeholder='Email' />
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