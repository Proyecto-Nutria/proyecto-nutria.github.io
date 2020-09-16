import { setContext } from "@apollo/client/link/context"
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

const getClient = () => {
  const uri = "https://us-central1-nutria-system.cloudfunctions.net"
  const httpLink = createHttpLink({
    uri,
    fetchOptions: {
      mode: "cors",
    },
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token")
    return {
      headers: {
        ...headers,
        Authorization: token,
      },
    }
  })

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}

export default getClient