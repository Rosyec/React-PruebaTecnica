import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/user';
import { getAllUsers } from '../services/users.service';

export const useGetUser = () => {

    const [user, setUser] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadUsers = async () => {
        setIsLoading(true);
        const data: User[] = await getAllUsers();
        if (data.length > 0) {
            setUser(data);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        loadUsers();
    }, []);

    return {
        user,
        isLoading,
    }
}
