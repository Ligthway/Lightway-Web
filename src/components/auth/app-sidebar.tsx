import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import { ChevronDown } from 'lucide-react';
import {Button} from "@/components/ui/button";

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox
  },
  {
    title: 'Calendar',
    icon: Calendar,
    children: [
      { title: 'Work', url: '#work' },
      { title: 'Personal', url: '#personal' }
    ]
  },
  {
    title: 'Search',
    url: '#',
    icon: Search
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings
  }
];

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar
  } = useSidebar();
  return (
    <Sidebar side='left' variant='floating' collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.children ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <SidebarMenuButton>
                              <item.icon />
                              <span>{item.title}</span>
                              <ChevronDown className="ml-auto" />
                            </SidebarMenuButton>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                            {item.children.map((child) => (
                                <DropdownMenuItem key={child.title} asChild>
                                  <a href={child.url}>
                                    <span>{child.title}</span>
                                  </a>
                                </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
