import apiRequestHandler from '../apiHandler';

export const getBlogs = async () => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const postBlog = async () => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const getBlog = async (id) => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs${id}`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const editBlog = async (id) => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs${id}`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const updateBlog = async (id) => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs${id}`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};

export const deleteBlog = async (id) => {
    try {
        const response = await apiRequestHandler({
            url: `/blogs${id}`,
            method: 'get',
        });

        return response;
    } catch (error) {
        console.warn(error);
    }
};





