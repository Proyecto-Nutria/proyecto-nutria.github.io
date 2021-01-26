import { ApolloClient, ApolloLink, InMemoryCache, HttpLink} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const getApolloClient = () => {
  const httpLink = new HttpLink ({
    uri: "https://nutria-core-backend.herokuapp.com/v1/graphql"
  })

  // TODO: Crate a method to enable/disable errorLink, it only be enable in dev
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  //TODO: Change to Auth0
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token")
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return forward(operation)
  })

  return new ApolloClient({
    link: ApolloLink.from([errorLink, authMiddleware.concat(httpLink)]),
    cache: new InMemoryCache(),
  })
}

export default getApolloClient
