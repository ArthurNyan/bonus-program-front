import type { TLoginRequest, TLoginResponse } from '../model/model';

import { axiosInstance } from '@/shared/api/axiosInstance';
import { API_ENDPOINTS } from '@/shared/const/apiEndpoints/apiEndpoints';

export const getLogin = async ({ login, password }: TLoginRequest): Promise<TLoginResponse> => {
    const { data } = await axiosInstance.post<TLoginResponse>(API_ENDPOINTS.AUTH_LOGIN, { name: login, password });

    return data;
};
