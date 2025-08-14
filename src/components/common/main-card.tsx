import { Card, CardContent } from '@/components/ui/card';
import { FiEdit2 } from 'react-icons/fi';
import { useState } from 'react';
import Modal from '@/components/common/(modals)/modal';
import ModalLayout from '@/components/common/(modals)/layout';

type MainCardProps = {
  title: string;
  subtitle?: string;
  items: RowProps[];
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

type RowProps = {
  label: string;
  aisle: string;
  scans: string;
  lastScanned: string;
  onLabelClick: () => void;
};

function LedRow({label, aisle, scans, lastScanned, onLabelClick }: RowProps) {
  return (
    <div className='grid w-full grid-cols-[1.5fr_1.5fr_1.5fr_3fr_auto] items-center rounded-xl bg-gray-100 p-3 shadow-sm'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={onLabelClick}>
        <img src="/public/images/Led.png" alt='led' className='h-5 w-5 object-contain' />
        <span className='text-sm font-semibold text-gray-900'>{label}</span>
      </div>

      <span className='text-sm font-semibold text-gray-900'>{aisle}</span>
      <span className='text-sm font-semibold text-gray-900'>{scans}</span>
      <span className='text-sm font-semibold text-gray-900'>
        Last Scanned {lastScanned}
      </span>
      <div className='flex items-center justify-center gap-3'>
        <button className='hover:text-gray-600' title='Edit'>
          <FiEdit2 className='h-4 w-4' />
        </button>
        <button className='font-bold hover:text-gray-600' title='More'>
          ⋮
        </button>
      </div>
    </div>
  );
}


export default function MainCard({
                                   title,
                                   subtitle,
                                   items,
                                   icon,
                                   children,
                                   ...props
                                 }: MainCardProps & React.ComponentProps<typeof Card>) {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLed, setSelectedLed] = useState<RowProps | null>(null);

  const handleLabelClick = (led: RowProps) => {
    setSelectedLed(led);
    setModalOpen(true);
  };

  return (
    <Card {...props} className='flex w-full gap-2 p-3'>
      <CardContent className='flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
          <h2 className='text-m p-0 font-bold font-medium'>{title}</h2>

          <div className='ml-auto flex items-center gap-2 text-sm font-semibold text-blue-500 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
            {icon && <span className='text-lg'>{icon}</span>}
            {subtitle}
          </div>
          <button className='ml-4 font-bold hover:text-gray-600' title='More'>
            ⋮
          </button>
        </div>

        {children}

        {items.map((item, i) => (
          <LedRow
            key={i}
            label={item.label}
            aisle={item.aisle}
            scans={item.scans}
            lastScanned={item.lastScanned}
            onLabelClick={() => handleLabelClick(item)}
          />
        ))}
        {selectedLed && (
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalLayout setModalOpen={setModalOpen} />
          </Modal>
        )}
      </CardContent>
    </Card>
  );
}
