import axios from 'axios';

import { ACCESS_TOKEN } from '@/shared/const/apiEndpoints/localstorageKeys';
import { localStorageService } from '@/shared/lib/localStorageService/localStorageService';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorageService.getItem(ACCESS_TOKEN);

    if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return axiosInstance(originalRequest);
        }

        throw error;
    },
);
