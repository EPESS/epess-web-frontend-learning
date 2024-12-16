import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import ApolloClientProvider from '@/providers/apolloClient';
import LayoutWrapper from '@/components/layout-wrapper';

export const metadata: Metadata = {
  title: 'EPESS',
  description: 'Essay Platform for Essay Support Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ApolloClientProvider>
        <html lang='en'>
          <body>
            <ToastContainer limit={3} />
            <LayoutWrapper>
              <div>
                {children}
              </div>
            </LayoutWrapper>
          </body>
        </html>
      </ApolloClientProvider>
    </ClerkProvider>
  );
}
