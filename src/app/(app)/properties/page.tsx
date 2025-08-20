'use client';

import Header from '@/components/common/header';
import MainCard from '@/components/common/main-card';
import { Lightbulb, Plus, Scan } from 'lucide-react';

export default function Page() {
  return (
    <div className='flex w-full flex-col gap-6 rounded-xl'>
      <Header
        title='Properties'
        buttonText='Add light'
        buttonIcon={<Plus size={20} />}
        buttonOnClick={() => {}}
        summary={
          <div className='text-muted-foreground flex gap-1 overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap'>
            You are managing{' '}
            <span className='text-foreground flex items-center gap-1'>
              <Lightbulb size={20} />4 properties
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
      <div className='flex flex-col gap-4'>
        <MainCard
          title='Carrefour AFI Brasov'
          items={[
            {
              label: '1',
              aisle: '46',
              scans: 13,
              lastScanned: '2h',
              lightId: 'LGT-1A2B3C',
              lastEdit: '2d'
            },
            {
              label: '2',
              aisle: '73',
              scans: 89,
              lastScanned: '1d',
              lightId: 'LGT-4D5E6F',
              lastEdit: '3d'
            },
            {
              label: '3',
              aisle: '14',
              scans: 56,
              lastScanned: '3d',
              lightId: 'LGT-7G8H9I',
              lastEdit: '5h'
            },
            {
              label: '4',
              aisle: '45',
              scans: 13,
              lastScanned: '2h',
              lightId: 'LGT-0J1K2L',
              lastEdit: '1d'
            },
            {
              label: '5',
              aisle: '73',
              scans: 89,
              lastScanned: '1d',
              lightId: 'LGT-3M4N5O',
              lastEdit: '4d'
            },
            {
              label: '6',
              aisle: '14',
              scans: 56,
              lastScanned: '3d',
              lightId: 'LGT-6P7Q8R',
              lastEdit: '6d'
            }
          ]}
        ></MainCard>
      </div>
    </div>
  );
}
