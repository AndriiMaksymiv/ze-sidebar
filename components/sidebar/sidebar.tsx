'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ImageIcon, X } from 'lucide-react';

import { BackgroundPromptForm } from './background-prompt-form';
import BackgroundsGridEmpty from './backgrounds-grid--empty';
import { BackgroundsGrid } from './backgrounds-grid';
import { BackgroundItem } from '@/types/sidebar-types';

export default function Sidebar() {
  const [items, setItems] = useState<BackgroundItem[]>([]);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="secondary" size="lg">
          <ImageIcon className="size-5" /> Change background
        </Button>
      </DrawerTrigger>

      <DrawerContent className="overflow-y-auto overflow-x-hidden">
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle>Change background</DrawerTitle>
          {/* Description for screen readers only */}
          <DrawerDescription className="sr-only">Add promt to generate background for your avatar</DrawerDescription>

          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="h-6 w-5 p-0">
              <X className="size-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <BackgroundPromptForm items={items} setItems={setItems} setActiveItemId={setActiveItemId} />

        {items.length > 0 && <BackgroundsGrid items={items} activeItemId={activeItemId} onSelect={setActiveItemId} />}

        {items.length === 0 && <BackgroundsGridEmpty />}
      </DrawerContent>
    </Drawer>
  );
}
