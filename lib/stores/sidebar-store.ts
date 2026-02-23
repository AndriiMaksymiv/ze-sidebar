import { create } from 'zustand';

import { SidebarState } from '@/types/sidebar-types';

export const useSidebarStore = create<SidebarState>((set) => ({
  items: [],
  activeItemId: null,
  promptState: { status: 'idle' },

  setItems: (updater) => set((state) => ({ items: updater(state.items) })),
  setActiveItemId: (updater) => set((state) => ({ activeItemId: updater(state.activeItemId) })),
  setPromptState: (promptState) => set({ promptState }),

  addItem: (item) => set((state) => ({ items: [item, ...state.items] })),
  markItemLoaded: (itemId) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === itemId ? { ...item, loading: false } : item)),
    })),
}));
