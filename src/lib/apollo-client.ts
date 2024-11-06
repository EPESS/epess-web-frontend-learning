import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

export const createApolloClient = (sessionId: string | null) => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'X-Session-Id': sessionId ? sessionId : '',
    },
  }));

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
