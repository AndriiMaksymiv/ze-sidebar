'use client';

import Image from 'next/image';
import { Redo2, Undo2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

import { submitBackgroundPrompt } from '../../lib/actions/sidebar-actions';
import { useSidebarStore } from '@/lib/stores/sidebar-store';
import { BackgroundItem } from '@/types/sidebar-types';

export function BackgroundPromptForm() {
  const { items, promptState, setPromptState, addItem, setActiveItemId, markItemLoaded } = useSidebarStore();

  async function handleSubmit(formData: FormData) {
    const nextState = await submitBackgroundPrompt(promptState, formData);
    setPromptState(nextState);

    if (nextState.status !== 'success' || !nextState.submissionId) {
      return;
    }

    const nextItem: BackgroundItem = { id: nextState.submissionId, loading: true };

    addItem(nextItem);
    setActiveItemId((previousActiveItemId) => (items.length === 0 ? nextItem.id : (previousActiveItemId ?? nextItem.id)));

    // Simulate loading state for the new background item
    setTimeout(() => {
      markItemLoaded(nextItem.id);
    }, 5000);
  }

  return (
    <>
      <form action={handleSubmit} className="space-y-5 px-5 pb-5">
        <div className="space-y-3">
          <label htmlFor="background-prompt" className="font-semibold block">
            Background idea
          </label>
          <div className="rounded-xl border py-3 pl-1 pr-2">
            <Textarea id="background-prompt" name="prompt" rows={5} defaultValue={promptState.prompt} placeholder="Describe the background you want to generate" className="px-3 h-29 mb-5" />
            <div className="flex items-center justify-between">
              <Button variant="ghost" type="button" size="sm" className="rounded-xl">
                <div className="relative w-4.5 h-4.5">
                  <Image src="/icons/ai-stars--top.svg" alt="Stars icon" fill className="object-contain" />
                </div>
                Regenerate
              </Button>
              <div className="flex items-center">
                <Button variant="ghost" type="button" size="icon-sm">
                  <Undo2 className="size-5 text-gray-mid" />
                  <span className="sr-only">Back</span>
                </Button>
                <Button variant="ghost" type="button" size="icon-sm">
                  <Redo2 className="size-5 text-gray-mid" />
                  <span className="sr-only">Forward</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full font-semibold" size="lg">
          <div className="relative w-4 h-4">
            <Image src="/icons/ai-stars--bottom.svg" alt="Stars icon" fill className="object-contain" />
          </div>
          Generate BG for 1 credit
        </Button>
      </form>
    </>
  );
}
