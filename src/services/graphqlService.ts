import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

// Because the type contracts aren’t nominally equivalent between the official Apollo
// Client and the object created by createUploadLink (at the moment), we need to use
// @ts-ignore to prevent type error.
//@ts-ignore
import { createUploadLink } from "apollo-upload-client"

const getClient = () => {
  const uri = "https://us-central1-nutria-system.cloudfunctions.net/graphql"
  const httpLink = createUploadLink({
    uri,
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
    link: ApolloLink.from([errorLink, authMiddleware.concat(httpLink)]),
    cache: new InMemoryCache(),
  })

  return client
}

export default getClient
