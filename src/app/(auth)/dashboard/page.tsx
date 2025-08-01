'use client';

import { AppSidebar } from '@/components/auth/app-sidebar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/ui/site-header';
import { FiEdit2 } from 'react-icons/fi';

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
            <div className='mx-auto max-w-7xl rounded-xl bg-white p-6'>
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
                        <div className='flex gap-4 text-black'>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='text-lg font-bold'>12</span>
                            <span className='text-sm font-semibold'>
                              lights
                            </span>
                          </div>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='text-lg font-bold'>200 m²</span>
                            <span className='text-sm font-semibold'>
                              covered
                            </span>
                          </div>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='font-bold'>
                              2.5k scans this week
                            </span>
                          </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
                          {/* Left: Label */}
                          <div className='flex items-center gap-45'>
                            <span className='text-sm font-bold font-medium text-gray-900'>
                              LED Strip 1
                            </span>
                          </div>

                          {/* Middle: Aisle*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>Aisle 34</span>
                          </div>

                          {/* Middle: Scans*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>1.3k scans</span>
                          </div>

                          {/* Right: Last Scanned*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <span className='font-semibold whitespace-nowrap'>
                              Last scanned 12m ago
                            </span>
                          </div>
                          {/* Right: Actions*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <button
                              className='hover:text-gray-600'
                              title='Edit'
                            >
                              <FiEdit2 className='h-4 w-4' />
                            </button>
                            <button
                              className='font-boldhover:text-gray-600'
                              title='More'
                            >
                              ⋮
                            </button>
                          </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
                          {/* Left: Label */}
                          <div className='flex items-center gap-45'>
                            <span className='text-sm font-bold font-medium text-gray-900'>
                              LED Strip 1
                            </span>
                          </div>

                          {/* Middle: Aisle*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>Aisle 34</span>
                          </div>

                          {/* Middle: Scans*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>1.3k scans</span>
                          </div>

                          {/* Right: Last Scanned*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <span className='font-semibold whitespace-nowrap'>
                              Last scanned 12m ago
                            </span>
                          </div>
                          {/* Right: Actions*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <button
                              className='hover:text-gray-600'
                              title='Edit'
                            >
                              <FiEdit2 className='h-4 w-4' />
                            </button>
                            <button
                              className='font-boldhover:text-gray-600'
                              title='More'
                            >
                              ⋮
                            </button>
                          </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
                          {/* Left: Label */}
                          <div className='flex items-center gap-45'>
                            <span className='text-sm font-bold font-medium text-gray-900'>
                              LED Strip 1
                            </span>
                          </div>

                          {/* Middle: Aisle*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>Aisle 34</span>
                          </div>

                          {/* Middle: Scans*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>1.3k scans</span>
                          </div>

                          {/* Right: Last Scanned*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <span className='font-semibold whitespace-nowrap'>
                              Last scanned 12m ago
                            </span>
                          </div>
                          {/* Right: Actions*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <button
                              className='hover:text-gray-600'
                              title='Edit'
                            >
                              <FiEdit2 className='h-4 w-4' />
                            </button>
                            <button
                              className='font-boldhover:text-gray-600'
                              title='More'
                            >
                              ⋮
                            </button>
                          </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
                          {/* Left: Label */}
                          <div className='flex items-center gap-45'>
                            <span className='text-sm font-bold font-medium text-gray-900'>
                              LED Strip 1
                            </span>
                          </div>

                          {/* Middle: Aisle*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>Aisle 34</span>
                          </div>

                          {/* Middle: Scans*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>1.3k scans</span>
                          </div>

                          {/* Right: Last Scanned*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <span className='font-semibold whitespace-nowrap'>
                              Last scanned 12m ago
                            </span>
                          </div>
                          {/* Right: Actions*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <button
                              className='hover:text-gray-600'
                              title='Edit'
                            >
                              <FiEdit2 className='h-4 w-4' />
                            </button>
                            <button
                              className='font-boldhover:text-gray-600'
                              title='More'
                            >
                              ⋮
                            </button>
                          </div>
                        </div>
                        <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
                          {/* Left: Label */}
                          <div className='flex items-center gap-45'>
                            <span className='text-sm font-bold font-medium text-gray-900'>
                              LED Strip 1
                            </span>
                          </div>

                          {/* Middle: Aisle*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>Aisle 34</span>
                          </div>

                          {/* Middle: Scans*/}
                          <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                            <span>1.3k scans</span>
                          </div>

                          {/* Right: Last Scanned*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <span className='font-semibold whitespace-nowrap'>
                              Last scanned 12m ago
                            </span>
                          </div>
                          {/* Right: Actions*/}
                          <div className='flex items-center gap-3 text-sm text-gray-900'>
                            <button
                              className='hover:text-gray-600'
                              title='Edit'
                            >
                              <FiEdit2 className='h-4 w-4' />
                            </button>
                            <button
                              className='font-boldhover:text-gray-600'
                              title='More'
                            >
                              ⋮
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* card 2 */}

                <Card>
                  <CardContent className='space-y-2 p-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h2 className='mb-5 text-lg font-medium'>
                          CinemaCity AFI Brasov
                        </h2>
                        <div className='flex gap-4 text-black'>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='text-lg font-bold'>12</span>
                            <span className='text-sm font-semibold'>
                              lights
                            </span>
                          </div>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='text-lg font-bold'>200 m²</span>
                            <span className='text-sm font-semibold'>
                              covered
                            </span>
                          </div>
                          <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <span className='font-bold'>
                              1.7k scans this week
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
