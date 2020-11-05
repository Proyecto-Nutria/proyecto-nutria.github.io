import React, { useState, createContext, useEffect } from "react"
import { auth } from "services/firebaseService"
import { ROLE_KEY, TOKEN_KEY, INTERVIEWEE_ROLE } from "utils/constants/values"

type maybeUser = firebase.User | null
const UserContext = createContext<maybeUser>(null)

const saveToken = async (currentUser: firebase.User) => {
  const token = await currentUser?.getIdToken(true)
  localStorage.setItem(TOKEN_KEY, token)
  //TODO: Store the correct type of user
  localStorage.setItem(ROLE_KEY, INTERVIEWEE_ROLE)
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
