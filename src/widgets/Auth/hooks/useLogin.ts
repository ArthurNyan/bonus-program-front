import { useMutation } from '@tanstack/react-query';

import type { TLoginRequest } from '../model/model';
import { getLogin } from '../services/getLogin';

import { ACCESS_TOKEN } from '@/shared/const/apiEndpoints/localstorageKeys';
import { localStorageService } from '@/shared/lib/localStorageService/localStorageService';

export const useLogin = () =>
    useMutation({
        mutationFn: (req: TLoginRequest) => {
            const response = getLogin(req);

            return response;
        },
        onSuccess: (data) => {
            if (data.access_token) {
                localStorageService.setItem(ACCESS_TOKEN, data.access_token);
            }
        },
    });
