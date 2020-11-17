import React, { useState, createContext, useEffect } from "react"
import { firebaseAuth } from "services/firebaseService"
import Auth from "utils/helpers/Auth"

type maybeUser = firebase.User | null
const UserContext = createContext<maybeUser>(null)

const UserProvider: React.FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<maybeUser>(null)

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(userAuth => {
      setUser(userAuth)
      userAuth && Auth.saveToken(userAuth)
    })
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export { UserContext }

export default UserProvider
