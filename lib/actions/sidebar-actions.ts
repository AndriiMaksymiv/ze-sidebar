'use server';

import { BackgroundPromptState } from '@/types/sidebar-types';

export async function submitBackgroundPrompt(_previousState: BackgroundPromptState, formData: FormData): Promise<BackgroundPromptState> {
  const prompt = String(formData.get('prompt') ?? '');

  return {
    status: 'success',
    prompt,
    submissionId: crypto.randomUUID(),
  };
}
