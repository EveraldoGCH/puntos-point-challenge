import * as React from 'react';
// import { BarChartProps } from "./type";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DataChart } from '../../utils/types';
import { PulsoChartProps } from './type';
import useFilterPulso from '../../hooks/useFilterPulso';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const PulsoChart: React.FC<PulsoChartProps> = ({QueryData}) => {
    // if (QueryData.error) return <div>Request Failed</div>;
    const { labelsChart, dataChart } = useFilterPulso(QueryData)

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            }
        },
    };

    const labels = labelsChart

    const data: DataChart | any = {
        labels,
        datasets: dataChart,
    };


    return (
        <Bar options={options} data={data} width={"95%"} height={"40vh"} />
    );
}

export default PulsoChart;
