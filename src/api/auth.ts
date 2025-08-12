import { useMutation } from '@tanstack/react-query';
import api from './api';

export const login = async ({
  email,
  password
}: {
  email: string;
  password: string;
}) => {
  return api.post('/auth/login', { email, password }).then((res) => res.data);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login
  });
};

export const register = async ({
  firstName,
  lastName,
  email,
  password
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return api
    .post('/auth/register', { firstName, lastName, email, password })
    .then((res) => res.data);
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register
  });
};
