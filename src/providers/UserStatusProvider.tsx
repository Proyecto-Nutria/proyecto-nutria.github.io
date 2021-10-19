import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { useIsFirstLogin } from '../hooks/UserHooks';

export const UserStatusContext = createContext({
  isNewUser: true,
  setIsNewUser: (_isNewUserStatus: boolean) => {},
});

type UserStatusProviderProps = {
  children: ReactNode;
};

export default function UserStatusProvider({
  children,
}: UserStatusProviderProps) {
  const auth0NewUserFlag = useIsFirstLogin();
  const [isNewUser, setIsNewUser] = useState(auth0NewUserFlag);

  useEffect(() => {
    setIsNewUser(auth0NewUserFlag);
  }, [auth0NewUserFlag]);

  const dispatchNewUser = (isNewUserStatus: boolean) =>
    setIsNewUser(isNewUserStatus);

  return (
    <UserStatusContext.Provider
      value={{ isNewUser, setIsNewUser: dispatchNewUser }}
    >
      {children}
    </UserStatusContext.Provider>
  );
}
