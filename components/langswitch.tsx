'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import clsx from 'clsx';

interface LocalSwitcherProps {
  scrolled: boolean; // Add a prop for scrolled state
}

export default function LocalSwitcher({ scrolled }: LocalSwitcherProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onLocaleChange = (nextLocale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/'); // Removes the locale from the path
    const newPath = `/${nextLocale}/${currentPath}`;
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => onLocaleChange('en')}
        disabled={isPending}
        className={clsx(
          'pl-4 py-2',
          { 'font-bold': localActive === 'en', 'font-light': localActive !== 'en' },
          { 'text-black': scrolled, 'text-white': !scrolled } // Conditionally change color
        )}
      >
        en
      </button>
      <button
        onClick={() => onLocaleChange('de')}
        disabled={isPending}
        className={clsx(
          'pr-4 py-2',
          { 'font-bold': localActive === 'de', 'font-light': localActive !== 'de' },
          { 'text-black': scrolled, 'text-white': !scrolled } // Conditionally change color
        )}
      >
        de
      </button>
    </div>
  );
}
