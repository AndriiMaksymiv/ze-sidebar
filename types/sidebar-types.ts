export interface BackgroundPromptState {
  status: 'idle' | 'success';
  prompt?: string;
  submissionId?: string;
}

export interface BackgroundItem {
  id: string;
  loading?: boolean;
}

export interface BackgroundsGridProps {
  items: BackgroundItem[];
  activeItemId: string | null;
  onSelect: (itemId: string) => void;
}

export interface BackgroundPromptFormProps {
  items: BackgroundItem[];
  setItems: (items: (prev: BackgroundItem[]) => BackgroundItem[]) => void;
  setActiveItemId: (id: (prev: string | null) => string | null) => void;
}
