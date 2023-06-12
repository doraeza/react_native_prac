import { useState } from 'react';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{username: string}>({username: ""});

  const login = (username:string, password:string) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      setUser({ username });
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({username: ""});
  };

  return { isLoggedIn, user, login, logout };
};

export default useAuth;
