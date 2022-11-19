import apiRequestHandler from '../utils/apiHandler';

export const login = async userdetails => {
    try {
        const response = await apiRequestHandler({
            data: userdetails,
            url: '/auth/login',
            method: 'post',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const register = async userdetails => {
    try {
        const response = await apiRequestHandler({
            data: userdetails,
            url: '/auth/register',
            method: 'post',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};