import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client"

const getClient = () => {
  const uri = "https://us-central1-nutria-system.cloudfunctions.net/graphql"
  const httpLink = createHttpLink({
    uri,
  })

  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token")
    operation.setContext({
      headers: {
        Authorization: token,
      },
    })

    return forward(operation)
  })

  const client = new ApolloClient({
    link: authMiddleware.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}

export default getClient
