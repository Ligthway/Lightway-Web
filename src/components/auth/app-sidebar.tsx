'use client';
import { Button } from '@/components/ui/button';
import {
  Building2,
  ChartColumnBig,
  LayoutDashboard,
  Lightbulb,
  Settings
} from 'lucide-react';

import { cn } from '@/components/common/cn-helper';
import { NavUser } from '@/components/nav-user';
import Logo from '@/components/ui/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible='offcanvas' {...props} variant='inset'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='p-0 hover:bg-transparent'>
              <Link href='/dashboard' className='flex items-center gap-2'>
                <div className='rounded-full drop-shadow-[0_0_2px_rgba(96,165,250,0.8)]'>
                  <Logo />
                </div>
                <span className='text-base font-semibold text-white'>
                  Lightway
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className='mt-2 flex flex-1 flex-col gap-2'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href='/dashboard'
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1',
                  pathname === '/dashboard'
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                <LayoutDashboard className='h-5 w-5 text-white/60' />
                <span className='text-white'>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='rounded-md'>
              <Link
                href='/lights'
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1',
                  pathname === '/lights'
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                <Lightbulb className='h-5 w-5 text-white/60' />
                <span className='text-white'>Lights</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href='/properties'
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1',
                  pathname === '/properties'
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                <Building2 className='h-5 w-5 text-white/60' />
                <span className='text-white'>Properties</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href='/analytics'
                className={cn(
                  'flex items-center gap-2 rounded-md px-2 py-1',
                  pathname === '/analytics'
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:text-white'
                )}
              >
                <ChartColumnBig className='h-5 w-5 text-white/60' />
                <span className='text-white'>Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* spacer */}
        <div className='flex-1' />
      </SidebarContent>

      {/* bottom section */}
      <div className='space-y-3 p-2'>
        {/* Notification Card */}
        <div className='rounded-lg bg-stone-900 p-3 text-sm shadow-sm'>
          <div className='flex justify-between font-medium'>
            <span className='text-white'>Ad Request from Sephora</span>
            <span className='text-muted-foreground text-xs'>12m</span>
          </div>
          <div className='text-muted-foreground text-xs'>at AFI Brasov</div>
          <div className='flex items-center gap-1 p-2 text-white'>
            <Button
              className='flex h-5.5 w-5.5 items-center justify-center rounded-full bg-red-400 p-2 text-xs font-light hover:bg-red-500'
              variant='destructive'
            >
              3
            </Button>
            <span className='text-s'>Notifications</span>
          </div>
        </div>

        {/*  'add light' and 'settings' */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='#' className='flex items-center gap-2'>
                <IconPlus size={18} className='text-white/60' />
                <span className='text-white'>Add Light</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href='#' className='flex items-center gap-2'>
                <Settings size={18} className='text-white/60' />
                <span className='text-white'>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <SidebarFooter className='text-white'>
        <NavUser
          user={{
            name: 'Alexandru Simedrea',
            email: 'CNI Gr. Moisil',
            avatar: '/avatars/shadcn.jpg'
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
