'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth } from '@clerk/nextjs';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const uploadLink = createUploadLink({
  uri:
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
      ? process.env.NEXT_PUBLIC_GRAPHQL_DEV_URL
      : process.env.NEXT_PUBLIC_GRAPHQL_URL,
  headers: {
    'x-apollo-operation-name': 'GraphQL',
  },
});

export const createApolloClient = (sessionId: string | null) => {
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'Content-Type': 'application/json',
      'X-Session-Id': sessionId ? sessionId : '',
    },
  }));

  return new ApolloClient({
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
  });
};

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const { sessionId } = useAuth();
  const client = createApolloClient(sessionId!);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

ApolloClientProvider.displayName = 'ApolloClientProvider';

export default ApolloClientProvider;
