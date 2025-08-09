'use client';
import {
  ChartColumnBig,
  LayoutDashboard,
  Lightbulb,
  Settings
} from 'lucide-react';

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
import { IconBell, IconPlus } from '@tabler/icons-react';
import * as React from 'react';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props} className='bg-[#1E1E1E]'>
      <SidebarHeader className='bg-[#1E1E1E]'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <a
                href='#'
                className='pointer-events-none flex items-center gap-2'
              >
                <div className='bg-white-500 rounded-full p-1 drop-shadow-[0_0_2px_rgba(96,165,250,0.8)]'>
                  <Logo />
                </div>
                <span className='text-base font-semibold text-white'>
                  Lightway
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className='mt-2 flex flex-1 flex-col gap-2 bg-[#1E1E1E]'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <LayoutDashboard className='h-5 w-5 text-white' />
                <span className='text-white'>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='rounded-md'>
              <a href='#' className='flex items-center gap-2'>
                <Lightbulb className='h-5 w-5 text-white' />
                <span className='text-white'>Lights</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <ChartColumnBig className='h-5 w-5 text-white' />
                <span className='text-white'>Analytics</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* spacer */}
        <div className='flex-1' />
      </SidebarContent>

      {/* bottom section */}
      <div className='space-y-3 bg-[#1E1E1E] p-2'>
        {/* Notification Card */}
        <div className='rounded-lg bg-stone-900 p-3 text-sm shadow-sm'>
          <div className='flex justify-between font-medium'>
            <span className='text-white'>Ad Request from Sephora</span>
            <span className='text-muted-foreground text-xs'>12m</span>
          </div>
          <div className='text-muted-foreground text-xs'>at AFI Brasov</div>
          <div className='mt-3 flex items-center gap-1 text-red-500'>
            <IconBell size={14} />
            <span className='text-xs font-semibold'>3 Notifications</span>
          </div>
        </div>

        {/*  'add light' and 'settings' */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <IconPlus size={18} className='text-white' />
                <span className='text-white'>Add Light</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <Settings size={18} className='text-white' />
                <span className='text-white'>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <SidebarFooter className='bg-[#1E1E1E] text-white'>
        <div className='pointer-events-none'>
          <NavUser
            user={{
              name: 'Alexandru Simedrea',
              email: 'CNI Gr. Moisil',
              avatar: '/avatars/shadcn.jpg'
            }}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
