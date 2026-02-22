import Image from 'next/image';
import { DrawerFooter } from '../ui/drawer';

const BackgroundsGridEmpty = () => {
  return (
    <DrawerFooter>
      <div className="flex justify-between rounded-xl bg-gray-light/50">
        <div className="flex flex-col justify-center p-5">
          <p className="text-base font-bold">Replace BG with AI</p>
          <p className="text-muted-foreground mt-1">Give your AI avatar a custom backdrop to create a unique vibe.</p>
        </div>
        <div className="relative size-37 shrink-0">
          <Image src="/images/replace_bg.png" alt="Replace background illustration" fill sizes="150px" className="object-contain rounded-xl" />
        </div>
      </div>
    </DrawerFooter>
  );
};

export default BackgroundsGridEmpty;
