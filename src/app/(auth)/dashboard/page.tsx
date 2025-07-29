'use client';

import { AppSidebar } from '@/components/auth/app-sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/ui/site-header';
import { BarChart2, Lightbulb } from 'lucide-react';

export default function Page() {
  return (
    <div className='bg-muted flex min-h-screen'>
      <SidebarProvider
        style={
          {
            '--sidebar-width': 'calc(var(--spacing) * 72)',
            '--header-height': 'calc(var(--spacing) * 12)'
          } as React.CSSProperties
        }
      >
        <AppSidebar />

        <SidebarInset>
          <SiteHeader />

          <main className='flex-1 overflow-auto p-6'>
            <div className='mx-auto max-w-7xl rounded-xl bg-white p-6 shadow'>
              {/* header Row */}
              <div className='mb-4 flex items-center justify-between'>
                <h1 className='text-2xl font-semibold'>Lights</h1>
                <Button className='bg-blue-500 text-white'>+ Create</Button>
              </div>

              {/* light count summary row */}
              <div className='text-muted-foreground mb-3 text-sm'>
                You have <strong>24 lights</strong> registered, covering{' '}
                <strong>410m²</strong>.
              </div>

              {/* search + filters */}
              <div className='mb-6 flex flex-wrap items-center gap-2'>
                <Input placeholder='Search...' className='w-full max-w-xs' />
                <Badge variant='default'>All</Badge>
                <Badge variant='secondary'>Navigation systems</Badge>
                <Badge variant='secondary'>Information</Badge>
              </div>

              {/* cards section */}
              <div className='space-y-6'>
                {/* card 1 */}
                <Card>
                  <CardContent className='space-y-2 p-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h2 className='mb-5 text-lg font-medium'>
                          Carrefour AFI Brasov
                        </h2>
                        <div className='flex gap-2 text-black'>
                          <div className='flex flex-col rounded bg-gray-200 px-5 py-4'>
                            <span className='text-lg font-bold'>12</span>
                            <span className='text-sm font-semibold'>
                              lights
                            </span>
                          </div>
                          <div className='flex flex-col rounded bg-gray-200 px-5 py-4'>
                            <span className='text-lg font-bold'>200 m²</span>
                            <span className='text-sm font-semibold'>
                              covered
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center justify-between text-sm'>
                      <div className='text-muted-foreground text-xs'>
                        Last scanned 12m ago
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* card 2 */}
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
