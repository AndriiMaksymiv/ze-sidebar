'use client';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { ImageIcon, X } from 'lucide-react';

import { useSidebarStore } from '@/lib/stores/sidebar-store';
import { BackgroundPromptForm } from './background-prompt-form';
import BackgroundsGridEmpty from './backgrounds-grid--empty';
import { BackgroundsGrid } from './backgrounds-grid';

export default function Sidebar() {
  const items = useSidebarStore((s) => s.items);

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

        <BackgroundPromptForm />

        {items.length > 0 && <BackgroundsGrid />}

        {items.length === 0 && <BackgroundsGridEmpty />}
      </DrawerContent>
    </Drawer>
  );
}
