import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/user"
import { createUser, deleteUser, updateUser } from "../services/users.service";

export const useCrud = ( { state }:Props ) => {

    const navigate = useNavigate();
    const createQuery = useMutation('createUser', createUser, { onSuccess: (s) => console.log('created User') });
    const updateQuery = useMutation('updateUser', updateUser, { onSuccess: (s) => console.log('updated User') });
    const deleteQuery = useMutation('deleteQuery', deleteUser, { onSuccess: (s) => console.log('deleted User') });

    const updateU = async () => {
        const result = await updateQuery.mutateAsync(state);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const createU = async () => {
        const result = await createQuery.mutateAsync(state);
        if (result) {
            navigate('/app/home', { replace: true });
        }
    }

    const deleteU = async () => {
        const result = await deleteQuery.mutateAsync(state);
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