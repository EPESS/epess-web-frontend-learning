"use client"

import { SignIn } from '@clerk/nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const params = useSearchParams()

  const router = useRouter()

  const redirectUrl = params.get("redirect_url")

  useEffect(() => {
    if (redirectUrl) {
      router.push(redirectUrl)
    }
  }, [])


  return (
    <main className='flex justify-center items-center h-screen bg-login-custom'>
      <SignIn />
    </main>
  );
}
