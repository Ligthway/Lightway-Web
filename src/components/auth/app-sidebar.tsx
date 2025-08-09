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
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className='data-[slot=sidebar-menu-button]:!p-1.5'
            >
              <a href='#' className='flex items-center gap-2'>
                <div className='bg-white-500 rounded-full p-1 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
                  <Logo />
                </div>
                <span className='text-base font-semibold'>Lightway</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className='mt-2 ml-2 flex flex-1 flex-col gap-2'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <LayoutDashboard className='h-5 w-5 text-black' />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='bg-muted/50 rounded-md'>
              <a href='#' className='flex items-center gap-2'>
                <Lightbulb className='text-black-500 h-5 w-5' />
                <span>Lights</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <ChartColumnBig className='text-black-500 h-5 w-5' />
                <span>Analytics</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* spacer */}
        <div className='flex-1' />
      </SidebarContent>

      {/* bottom section */}
      <div className='space-y-3 p-2'>
        {/* Notification Card */}
        <div className='bg-muted/30 rounded-lg p-3 text-sm shadow-sm'>
          <div className='flex justify-between font-medium'>
            <span>Ad Request from Sephora</span>
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
                <IconPlus size={18} />
                <span>Add Light</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href='#' className='flex items-center gap-2'>
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </div>

      <SidebarFooter>
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
