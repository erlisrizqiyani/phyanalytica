'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

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
        <option className="text-black" value='en'>English</option>
        <option className="text-black" value='de'>German</option>
      </select>
    </label>
  );
}
