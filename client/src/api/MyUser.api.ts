import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

if (!BASE_URL) {
  throw new Error('BASE_URL is not defined in environment variables');
}

export type UserData = {
  auth0Id: string;
  email: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
};

export const useCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async (
    data: UserData
  ): Promise<Response | null> => {
    try {
      const accessToken = await getAccessTokenSilently();

      const response = await fetch(`${BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error creating user: ${errorText}`);
      }

      return response;
    } catch (error) {
      console.error('Failed to create user:', error);
      return null;
    }
  };

  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return { createUser, isLoading, isError, isSuccess };
};
