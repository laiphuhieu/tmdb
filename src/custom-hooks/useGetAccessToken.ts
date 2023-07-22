import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const useGetAccessToken = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        if (isAuthenticated) {
          const accessToken = await getAccessTokenSilently();

          setToken(accessToken);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAccessToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  return token;
};

export default useGetAccessToken;
