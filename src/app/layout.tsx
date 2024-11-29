import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import 'react-toastify/dist/ReactToastify.css';

import type { Metadata, Viewport } from 'next';
import { ToastContainer } from 'react-toastify';
import ApolloClientProvider from '@/providers/apolloClient';

export const metadata: Metadata = {
  title: 'EPESS',
  description: 'Essay Platform for Essay Support Services',
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ApolloClientProvider>
        <html lang='en'>
          <body className='light'>
            <ToastContainer limit={3} />
            {children}
          </body>
        </html>
      </ApolloClientProvider>
    </ClerkProvider>
  );
}
