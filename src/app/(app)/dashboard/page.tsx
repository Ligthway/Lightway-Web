'use client';

import GlowButton from '@/components/common/glow-button';
import Header from '@/components/common/header';
import SearchBar from '@/components/common/search-bar';
import ScanChartCard from '@/components/ui/chartPositive';
import Modal from '@/components/common/(modals)/modal';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Lightbulb, MousePointer, Pencil, Plus, Scan, Text } from 'lucide-react';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import MainCard from '@/components/common/main-card';
import ScanChartCardPositive from '@/components/ui/chartPositive';
import ScanChartCardNegative from '@/components/ui/chartNegative';

export default function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl">
      <Header
        title="Lights"
        buttonText="Create"
        buttonIcon={<Plus size={20} />}
        buttonOnClick={() => {
        }}
        summary={
          <div
            className="text-muted-foreground flex gap-1 overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap">
            You have{' '}
            <span className="text-foreground flex items-center gap-1">
              <Lightbulb size={20} />
              24 lights
            </span>{' '}
            registered, covering{' '}
            <span className="text-foreground flex items-center gap-1">
              <Scan size={20} />
              410m²
            </span>
            .
          </div>
        }
      />

      <div className="flex items-center gap-4">
        <SearchBar />
        <div className="flex items-center gap-2">
          <GlowButton
            className="rounded-full px-4"
            variant={selectedFilter === 'all' ? 'default' : 'muted'}
          >
            All
          </GlowButton>
          <GlowButton
            className="rounded-full px-4"
            variant={selectedFilter === 'navigation' ? 'default' : 'muted'}
          >
            Navigation systems
          </GlowButton>
          <GlowButton
            className="rounded-full px-4"
            variant={selectedFilter === 'information' ? 'default' : 'muted'}
          >
            Information
          </GlowButton>
        </div>
      </div>

      <MainCard
        title="Carrefour AFI Brasov"
        subtitle="Navigation System"
        icon={<MousePointer size={18} />}
        items={[
          { label: 'LED Light 1', aisle: 'Aisle 46', scans: '134', lastScanned: '2 hours ago' },
          { label: 'LED Light 2', aisle: 'Aisle 73', scans: '89', lastScanned: '1 day ago' },
          { label: 'LED Light 3', aisle: 'Aisle 14', scans: '56', lastScanned: '3 days ago' },
          { label: 'LED Light 1', aisle: 'Aisle 45', scans: '134', lastScanned: '2 hours ago' },
          { label: 'LED Light 2', aisle: 'Aisle 73', scans: '89', lastScanned: '1 day ago' },
          { label: 'LED Light 3', aisle: 'Aisle 14', scans: '56', lastScanned: '3 days ago' },
        ]}
        className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-xs"
      >
        {/*this is the random row of cards*/}
        <div className="flex gap-4 text-black">
          <div className="flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <span className="text-lg font-bold">12</span>
            <span className="text-sm font-semibold">lights</span>
          </div>
          <div className="flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <span className="text-lg font-bold">200 m²</span>
            <span className="text-sm font-semibold">covered</span>
          </div>
          <ScanChartCardPositive/>
          <div className="relative flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <div className="flex justify-end">
              <button className="rounded bg-white px-3 py-1 text-sm font-semibold shadow-sm hover:bg-gray-200">
                <div className="flex items-center gap-1 font-bold text-black">
                  Manage Map
                  <Pencil className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </MainCard>

      <MainCard
        title="Cinema City AFI Brasov"
        subtitle="Information System"
        icon={<Text size={18} />}
        items={[
          { label: 'LED Light 1', aisle: 'Aisle 43', scans: '134', lastScanned: '2 hours ago' },
          { label: 'LED Light 2', aisle: 'Aisle 47', scans: '34', lastScanned: '1 day ago' },
        ]}
        className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-xs"
      >
        {/*this is the random row of cards*/}
        <div className="flex gap-4 text-black">
          <div className="flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <span className="text-lg font-bold">12</span>
            <span className="text-sm font-semibold">lights</span>
          </div>
          <div className="flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <span className="text-lg font-bold">200 m²</span>
            <span className="text-sm font-semibold">covered</span>
          </div>
          <ScanChartCardNegative />
          <div className="relative flex flex-col rounded bg-gray-100 px-5 py-4 shadow-sm">
            <div className="flex justify-end">
              <button className="rounded bg-white px-3 py-1 text-sm font-semibold shadow-sm hover:bg-gray-200">
                <div className="flex items-center gap-1 font-bold text-black">
                  Edit Content
                  <Pencil className="h-4 w-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </MainCard>
</div>
);
}
