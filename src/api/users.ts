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
  return baseFetch('/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
  });
};
