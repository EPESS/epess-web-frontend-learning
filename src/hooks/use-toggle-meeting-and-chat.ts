import { create } from 'zustand';

interface MeetingAndChatState {
  isMeetingAndChatOpen: boolean;
  toggleMeetingAndChat: () => void;
}

export const useToggleMeetingAndChat = create<MeetingAndChatState>((set) => ({
  isMeetingAndChatOpen: true,
  toggleMeetingAndChat: () =>
    set((state) => ({ isMeetingAndChatOpen: !state.isMeetingAndChatOpen })),
}));
