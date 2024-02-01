import * as React from 'react';
import { BarChartProps } from "./type";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const BarChart: React.FC<BarChartProps> = ({ QueryData, dataChart, labelsChart }) => {
    if (QueryData.error) return <div>Request Failed</div>;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Bar Chart',
            // },
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

export default BarChart;
