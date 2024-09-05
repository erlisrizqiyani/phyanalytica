'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition, useEffect, useState } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update screen size state
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    // Add event listener on resize
    window.addEventListener('resize', updateScreenSize);

    // Set initial state
    updateScreenSize();

    // Cleanup on unmount
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = pathname.split('/').slice(2).join('/'); // Removes the locale from the path
    const newPath = `/${nextLocale}/${currentPath}`;
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <label className='border-2 rounded p-2'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="text-black" value='en'>{isSmallScreen ? 'en' : 'English'}</option>
        <option className="text-black" value='de'>{isSmallScreen ? 'de' : 'German'}</option>
      </select>
    </label>
  );
}
