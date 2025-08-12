'use client';

import GlowButton from '@/components/common/glow-button';
import Header from '@/components/common/header';
import SearchBar from '@/components/common/search-bar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ScanChartCard from '@/components/ui/chart';
import Modal from '@/components/ui/modal';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Lightbulb, MousePointer, Pencil, Plus, Scan } from 'lucide-react';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className='flex w-full flex-col gap-6 rounded-xl'>
      <Header
        title='Lights'
        buttonText='Create'
        buttonIcon={<Plus size={20} />}
        buttonOnClick={() => {}}
        summary={
          <div className='text-muted-foreground flex gap-1 overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap'>
            You have{' '}
            <span className='text-foreground flex items-center gap-1'>
              <Lightbulb size={20} />
              24 lights
            </span>{' '}
            registered, covering{' '}
            <span className='text-foreground flex items-center gap-1'>
              <Scan size={20} />
              410m²
            </span>
            .
          </div>
        }
      />

      {/* search + filters */}
      <div className='flex items-center gap-4'>
        <SearchBar />
        <div className='flex items-center gap-2'>
          <GlowButton
            className='rounded-full px-4'
            variant={selectedFilter === 'all' ? 'default' : 'muted'}
          >
            All
          </GlowButton>
          <GlowButton
            className='rounded-full px-4'
            variant={selectedFilter === 'navigation' ? 'default' : 'muted'}
          >
            Navigation systems
          </GlowButton>
          <GlowButton
            className='rounded-full px-4'
            variant={selectedFilter === 'information' ? 'default' : 'muted'}
          >
            Information
          </GlowButton>
        </div>
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
                  <h2 className='text-lg font-medium'>Carrefour AFI Brasov</h2>
                  <div className='ml-182 flex items-center gap-1 text-sm font-semibold text-blue-500 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
                    <MousePointer className='h-4 w-4' />
                    Navigation System
                  </div>
                  <button className='font-boldhover:text-gray-600' title='More'>
                    ⋮
                  </button>
                </div>

                {/* Stats and Map */}
                <div className='flex gap-4 text-black'>
                  <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                    <span className='text-lg font-bold'>12</span>
                    <span className='text-sm font-semibold'>lights</span>
                  </div>
                  <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                    <span className='text-lg font-bold'>200 m²</span>
                    <span className='text-sm font-semibold'>covered</span>
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
                    <span
                      className='cursor-pointer text-sm font-bold text-gray-900 transition hover:text-blue-500'
                      onClick={() => setModalOpen(true)}
                    >
                      LED Strip 1
                    </span>
                  </div>

                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                  >
                    <h2 className='mb-4 text-2xl font-bold'>
                      Detailed Light Overview
                    </h2>
                    <p className='mb-4 text-gray-700'>
                      This is the larger card content.
                    </p>
                    <Button onClick={() => setModalOpen(false)}>Close</Button>
                  </Modal>

                  <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                    <span>Aisle 34</span>
                  </div>

                  <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                    <span>1.3k scans</span>
                  </div>

                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <span className='font-semibold whitespace-nowrap'>
                      Last scanned 12m ago
                    </span>
                  </div>
                  {/* Right: Actions*/}
                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <button className='hover:text-gray-600' title='Edit'>
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
                  <div className='flex items-center gap-45'>
                    <span className='text-sm font-bold font-medium text-gray-900'>
                      LED Strip 1
                    </span>
                  </div>

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
                    <button className='hover:text-gray-600' title='Edit'>
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
                    <button className='hover:text-gray-600' title='Edit'>
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

                  <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                    <span>1.3k scans</span>
                  </div>

                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <span className='font-semibold whitespace-nowrap'>
                      Last scanned 12m ago
                    </span>
                  </div>
                  {/* Right: Actions*/}
                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <button className='hover:text-gray-600' title='Edit'>
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
                  <div className='flex items-center gap-45'>
                    <span className='text-sm font-bold font-medium text-gray-900'>
                      LED Strip 1
                    </span>
                  </div>

                  <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                    <span>Aisle 34</span>
                  </div>

                  <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
                    <span>1.3k scans</span>
                  </div>

                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <span className='font-semibold whitespace-nowrap'>
                      Last scanned 12m ago
                    </span>
                  </div>
                  <div className='flex items-center gap-3 text-sm text-gray-900'>
                    <button className='hover:text-gray-600' title='Edit'>
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
                    <span className='text-sm font-semibold'>lights</span>
                  </div>
                  <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                    <span className='text-lg font-bold'>200 m²</span>
                    <span className='text-sm font-semibold'>covered</span>
                  </div>
                  <div className='flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm'>
                    <span className='font-bold'>1.7k scans this week</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
