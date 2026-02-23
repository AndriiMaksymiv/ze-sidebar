export interface BackgroundPromptState {
  status: 'idle' | 'success';
  prompt?: string;
  submissionId?: string;
}

export interface BackgroundItem {
  id: string;
  loading?: boolean;
}

export interface SidebarState {
  items: BackgroundItem[];
  activeItemId: string | null;
  promptState: BackgroundPromptState;

  setItems: (updater: (prev: BackgroundItem[]) => BackgroundItem[]) => void;
  setActiveItemId: (updater: (prev: string | null) => string | null) => void;
  setPromptState: (state: BackgroundPromptState) => void;

  addItem: (item: BackgroundItem) => void;
  markItemLoaded: (itemId: string) => void;
}
