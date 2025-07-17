'use client';

import { SidebarLayoutInner } from '@/components/auth/sidebar-layout-inner';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarLayoutInner>{children}</SidebarLayoutInner>
    </SidebarProvider>
  );
}
