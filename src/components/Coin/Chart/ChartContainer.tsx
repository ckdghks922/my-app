import { useQuery } from 'react-query';
import ApexCharts from 'react-apexcharts';
import { fetchCoinHistory } from '@/utils';

interface CoinProps {
  close: string;
  high: string;
  low: string;
  open: string;
  market_cap: number;
  time_close: number;
  time_open: number;
  volume: string;
}

interface ChartProps {
  coinId: string;
}
export const ChartContainer: React.FC<ChartProps> = ({ coinId }) => {
  const { isLoading, data } = useQuery<CoinProps[]>(['price', coinId], () =>
    fetchCoinHistory(coinId),
  );
  const twoWeeksData = data?.slice(7);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: 'end price',
          data: twoWeeksData?.map(elem => Number(elem.close)) as number[],
        },
      ]}
      options={{
        chart: {
          width: 500,
          height: 500,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 4,
        },
        xaxis: {
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: { show: false },
          // categories: twoWeeksData?.map(elem => new Date(elem.time_close)),
        },
      }}
    />
  );
};
