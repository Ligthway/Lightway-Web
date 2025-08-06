'use client';

import { AppSidebar } from '@/components/auth/app-sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScanChartCard from '@/components/ui/chart';
import { Input } from '@/components/ui/input';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/ui/site-header';
import { MousePointer, Pencil } from 'lucide-react';
import { FiEdit2 } from 'react-icons/fi';
import { MdLightbulbOutline } from 'react-icons/md';
import { PiBracketsSquareLight } from 'react-icons/pi';

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
                <Button className='rounded-full bg-blue-500 text-white drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
                  + Create
                </Button>
              </div>

              {/* light count summary row */}
              <div className='text-muted-foreground mb-3 overflow-hidden text-sm text-ellipsis whitespace-nowrap'>
                You have{' '}
                <strong className='inline-flex items-center'>
                  <MdLightbulbOutline className='mr-1' />
                  24 lights
                </strong>{' '}
                registered, covering{' '}
                <strong className='inline-flex items-center'>
                  <PiBracketsSquareLight className='mr-1' />
                  410m²
                </strong>
                .
              </div>

              {/* search + filters */}
              <div className='mb-6 flex flex-wrap items-center gap-2 rounded-full'>
                <Input
                  placeholder='Search...'
                  className='w-full max-w-xs rounded-full'
                />
                <Button
                  variant='default'
                  className='rounded-full bg-blue-500 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'
                >
                  All
                </Button>
                <Button variant='secondary' className='rounded-full'>
                  Navigation systems
                </Button>
                <Button variant='secondary' className='rounded-full'>
                  Information
                </Button>
              </div>

              {/* cards section */}
              <div className='space-y-6'>
                {/* card 1 */}
                <Card>
                  <CardContent className='space-y-2 p-4'>
                    <div className='flex items-center justify-between'>
                      <div>
                        {/* Title and Navigation on same row */}
                        <div className='mb-5 flex items-center gap-6'>
                          <h2 className='text-lg font-medium'>
                            Carrefour AFI Brasov
                          </h2>
                          <div className='ml-182 flex items-center gap-1 text-sm font-semibold text-blue-500 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
                            <MousePointer className='h-4 w-4' />
                            Navigation System
                          </div>
                          <button
                            className='font-boldhover:text-gray-600'
                            title='More'
                          >
                            ⋮
                          </button>
                        </div>

                        {/* Stats and Map */}
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
                          <ScanChartCard />
                          <div className='relative flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                            <div className='flex justify-end'>
                              <button className='rounded bg-white px-3 py-1 text-sm font-semibold shadow-sm hover:bg-gray-200'>
                                <div className='flex items-center gap-1 font-bold text-black'>
                                  Manage Map
                                  <Pencil className='h-4 w-4' />
                                </div>
                              </button>
                            </div>
                            {/* the actual map */}
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
