import { gql, useQuery } from '@apollo/client';
import { create } from 'zustand';
import { useEffect } from 'react';

interface MeStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const GET_ME = gql`
  query Me {
    me {
      avatarUrl
      bankAccountNumber
      bankBin
      createdAt
      email
      id
      name
      phoneNumber
      role
      updatedAt
    }
  }
`;

export const useMeStore = create<MeStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useMe = () => {
  const userData = useMeStore((state) => state.user);
  const { data: user, loading: userLoading } = useQuery<{ me: User }>(GET_ME, {
    skip: !!userData,
  });
  const setUser = useMeStore((state) => state.setUser);

  useEffect(() => {
    if (user) {
      setUser(user.me);
    }
  }, [user, setUser]);

  return { user: userData, userLoading };
};
