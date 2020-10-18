import React, {
  useEffect,
  useCallback,
  useState,
  useContext,
  createContext,
} from 'react';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

import api from '../services/api';

interface IUserData {
  name: string;
  email: string;
}

interface IAuthData {
  token: string;
  user: IUserData;
}

interface IAuthContextData {
  user: IUserData;
  signOut(): void;
  signIn({ email, password }: ISignInData): Promise<void>;
  signUp({ name, email, password }: ISignUpData): Promise<void>;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter();

  const [data, setData] = useState<IAuthData | null>(() => {
    const token = Cookie.get('@FoodNetwork:token');
    const user = Cookie.get('@FoodNetwork:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return null;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInData) => {
      try {
        const response = await api.post('sessions', { email, password });

        const { token, user } = response.data;

        Cookie.set('@FoodNetwork:token', token);
        Cookie.set('@FoodNetwork:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
        router.push('/posts');
      } catch (err) {
        throw new Error(err.response.data.message);
      }
    },
    [router]
  );

  const signUp = useCallback(
    async ({ name, email, password }: ISignUpData) => {
      try {
        const response = await api.post('users', { name, email, password });

        const { token, user } = response.data;

        Cookie.set('@FoodNetwork:token', token);
        Cookie.set('@FoodNetwork:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
        router.push('/posts');
      } catch (err) {
        throw new Error(err.response.data.message);
      }
    },
    [router]
  );

  const signOut = useCallback(() => {
    Cookie.remove('@FoodNetwork:token');
    Cookie.remove('@FoodNetwork:user');

    setData(null);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const authPath =
        router.pathname === '/auth/login' ||
        router.pathname === '/auth/register';

      if (!data && router.pathname == '/posts/create') {
        window.location.href = '/auth/login';
      }

      if (data && authPath) {
        window.location.href = '/posts';
      }
    };

    handleRouteChange();
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [data, router]);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) return;

  return context;
}
