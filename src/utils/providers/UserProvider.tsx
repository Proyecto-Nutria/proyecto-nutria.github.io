import React, { useState, createContext, useEffect } from "react"
import { auth } from "../wrappers/firebaseWrapper"

type maybeUser = firebase.User | null
const UserContext = createContext<maybeUser>(null)

const saveToken = async (currentUser: firebase.User) => {
  const token = await currentUser?.getIdToken()
  localStorage.setItem("token", token)
}

const Provider = UserContext.Provider
const UserProvider: React.FunctionComponent = ({ children }) => {
  const [user, changeUser] = useState<maybeUser>(null)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      changeUser(userAuth)
      userAuth && saveToken(userAuth)
    })
  }, [])

  return <Provider value={user}>{children}</Provider>
}

export { UserContext }

export default UserProvider
