'use client';

import { AppSidebar } from '@/components/auth/app-sidebar';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

export function SidebarLayoutInner({
  children
}: {
  children: React.ReactNode;
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <AppSidebar />
      <main className='ml-12 p-4'>
        <SidebarTrigger />
        <button
          onClick={toggleSidebar}
          className='mb-4 inline-flex items-center gap-1 rounded border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-100'
        >
         Menu
        </button>
        {children}
      </main>
    </>
  );
}
