import React, { useState, createContext, useEffect } from "react";
import { auth } from "./../firebase";

type maybeUser = firebase.User | null;
const UserContext = createContext<maybeUser>(null);

const Provider = UserContext.Provider;
const UserProvider: React.FunctionComponent = ({ children }) => {
  const [user, changeUser] = useState<maybeUser>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => changeUser(userAuth));
  }, []);

  return <Provider value={user}>{children}</Provider>;
};

export { UserContext };

export default UserProvider;
