import { ArrowUpRight } from 'lucide-react';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

// Fake data to simulate scans over days
const data = [
  { name: 'Mon', scans: 400 },
  { name: 'Tue', scans: 300 },
  { name: 'Wed', scans: 500 },
  { name: 'Thu', scans: 450 },
  { name: 'Fri', scans: 600 },
  { name: 'Sat', scans: 700 },
  { name: 'Sun', scans: 800 }
];

export default function ScanChartCard() {
  return (
    <div className='w-full rounded bg-gray-100 p-4 shadow-sm sm:w-auto'>
      <div className='flex items-center gap-1 font-bold text-black'>
        2.5k scans this week
        <ArrowUpRight className='h-6 w-6' />
      </div>
      <ResponsiveContainer width='100%' height={35}>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='scans'
            stroke='#22c55e'
            strokeWidth={3}
            dot={false}
          />
          <XAxis dataKey='name' hide />
          <YAxis hide />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
