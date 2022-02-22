import { baseFetch } from './base';
import { SignIn, User } from '../types';

export const createUser = async (user: User) => {
  return baseFetch('/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
};

export const signIn = async (user: SignIn) => {
  const data = await baseFetch('/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
  localStorage.setItem('token', data.token);
  localStorage.setItem('name', data.name);
  localStorage.setItem('userId', data.userId);
  return data;
};
