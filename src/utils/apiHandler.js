import axios from 'axios';
import { useLocalStorage } from '../hooks';

const apiRequestHandler = async ({ data, method, url }) => {
    const baseUrl = 'https://simer.wmdd4950.com/project/api/v1' + url;
    const { getValueFor } = useLocalStorage();
    const token = (await getValueFor('token')) || '';

    const requestCconfig = {
        method: method.toLowerCase(),
        data,
        url: baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await axios(requestCconfig);
        return response?.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response.data;
        }
        return 'An unexpected error occurred';
    }
};

export default apiRequestHandler;