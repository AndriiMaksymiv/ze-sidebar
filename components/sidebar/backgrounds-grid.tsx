import { cn } from '@/lib/utils';
import { CircularLoader } from './circular-loader';
import { BackgroundsGridProps } from '@/types/sidebar-types';

export function BackgroundsGrid({ items, activeItemId, onSelect }: BackgroundsGridProps) {
  return (
    <section className="space-y-3 px-5 pb-4 mt-6">
      <h3 className="text-sm font-semibold">Your backgrounds</h3>

      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => {
          const isActive = item.id === activeItemId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={cn(
                'bg-muted-foreground/10 relative h-50 w-full overflow-hidden rounded-2xl border-2 text-left transition-colors cursor-pointer',
                isActive || item.loading ? 'border-black' : 'border-transparent hover:border-black',
              )}
              aria-pressed={isActive}
            >
              {item.loading && <CircularLoader />}
              {!item.loading && isActive && <span className="text-gray-dark absolute left-2 top-2 text-[10px]/2.5 font-bold uppercase bg-white p-1 rounded-[5px]">default</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}
