import axios, { AxiosInstance } from 'axios'
import { User } from '../interfaces/user';

const API: AxiosInstance = axios.create({ baseURL: 'https://635017b9df22c2af7b630c3e.mockapi.io/api/v1' });

const getAllUsers = async () => {
    try {
        const response = await API.get('/users');
        const user: User[] = response.data;
        return user;
    } catch (error) {
        return [];
    }
}

const getUserById = async (data: User) => {
    try {
        const response = await API.get(`/users/${data.id}`);
        const user: User = response.data;
        return user;
    } catch (error) {
        return EmptyData;
    }
}

const createUser = async (data: User) => {
    try {
        const response = await API.post('/users', { ...data });
        const user: User = response.data;
        return user;
    } catch (error) {
        return EmptyData
    }
}

const updateUser = async (data: User) => {
    try {
        const response = await API.put(`/users/${data.id}`, { ...data });
        const user: User = response.data;
        return user;
    } catch (error) {
        return EmptyData;
    }
}

const deleteUser = async (data: User) => {
    try {
        const response = await API.delete(`/users/${data.id}`);
        const user: User = response.data;
        return user;
    } catch (error) {
        return EmptyData;
    }
}

const EmptyData = {
    id: '',
    first_name: '',
    avatar: '',
    email: '',
    second_name: '',
    createdAt: ''
}

export {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}