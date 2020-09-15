import React, { useState, createContext, useEffect } from "react";
import { auth } from "./../firebase";

const UserContext = createContext<firebase.User | null>(null);

const UserProvider: React.FunctionComponent = ({ children }) => {
  const [user, changeUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => changeUser(userAuth));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserContext };

export default UserProvider;
