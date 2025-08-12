import { Card, CardContent } from '@/components/ui/card';
import { FiEdit2 } from 'react-icons/fi';

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
};

function LedRow({ label, aisle, scans, lastScanned }: RowProps) {
  return (
    <div className='mt-3 flex flex-col gap-45 rounded-xl bg-gray-100 p-3 shadow-sm transition sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-center gap-45'>
        <span className='text-sm font-bold font-medium text-gray-900'>
          {label}
        </span>
      </div>
      <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
        <span>{aisle}</span>
      </div>
      <div className='flex items-center gap-45 text-sm font-semibold text-gray-900'>
        <span>{scans}</span>
      </div>
      <div className='flex items-center gap-3 text-sm text-gray-900'>
        <span className='font-semibold whitespace-nowrap'>{lastScanned}</span>
      </div>
      <div className='flex items-center gap-3 text-sm text-gray-900'>
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
  return (
    <Card {...props}>
      <CardContent className='space-y-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <h2 className='text-m font-medium font-bold p-3'>{title}</h2>
            {subtitle && (
              <div className='flex items-center gap-2 text-sm font-semibold text-blue-500 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]'>
                {icon && <span className='text-lg'>{icon}</span>}
                {subtitle}
              </div>
            )}
          </div>
          <button className='hover:text-gray-600 space-x-2' title='More'>
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
          />
        ))}
      </CardContent>
    </Card>
  );
}
