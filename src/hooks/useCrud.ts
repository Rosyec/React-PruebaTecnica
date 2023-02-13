import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/user"
import { createUser, deleteUser, updateUser } from "../services/users.service";

export const useCrud = ( { state }:Props ) => {

    const navigate = useNavigate();

    const updateU = async () => {
        const result = await updateUser(state);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const createU = async () => {
        const result = await createUser(state);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const deleteU = async () => {
        const result = await deleteUser(state);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    return {
        updateU,
        createU,
        deleteU
    }
    
}

interface Props {
    state: User,

}