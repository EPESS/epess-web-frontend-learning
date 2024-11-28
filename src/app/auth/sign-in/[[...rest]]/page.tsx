import { RedirectToSignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className='flex justify-center items-center h-screen bg-login-custom'>
      <RedirectToSignIn />
    </main>
  );
}
