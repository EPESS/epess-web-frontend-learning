'use client';

import { ApolloClient, InMemoryCache, ApolloProvider, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { useAuth } from '@clerk/nextjs';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { createClient } from 'graphql-ws';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

if (process.env.NODE_ENV === 'development') {
    console.log('ApolloProvider is running in development mode');
    loadDevMessages();
    loadErrorMessages();
}


export const createApolloClient = (sessionId: string | null) => {

    const wsLink = new GraphQLWsLink(
        createClient({
            url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL ?? 'wss://api.epess.org/v1/graphql',
            connectionParams: () => {
                return {
                    'x-session-id': sessionId
                }
            },
            retryAttempts: 3,
            keepAlive: 10000,
        }),
    );

    const uploadLink = createUploadLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'https://api.epess.org/v1/graphql',
        headers: {
            'x-apollo-operation-name': 'Upload',
        },
    });


    const link = split(
        (operation) => operation.operationName.includes('Upload') || operation.operationName.includes('SubscribeDocument'),
        uploadLink,
        wsLink
    );

    return new ApolloClient({
        link: link,
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
