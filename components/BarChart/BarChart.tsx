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
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const BarChart: React.FC = () => {

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

    const labels = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];

    const data = {
        labels,
        datasets: [
            {
                label: 'Clientes totales',
                data: 0,
                backgroundColor: '#EB3535',
            },
            {
                label: 'Clientes nuevos',
                data: labels.map(e=>(e.replace(":",""))+Math.random()),
                backgroundColor: '#EB7635',
            },
            {
                label: 'Compraron',
                data: labels.map(e=>Number(e.replace(":",""))-Math.random()),
                backgroundColor: '#358DEB',
            },
            {
                label: 'No compraron',
                data: 2,
                backgroundColor: '#2DCF5A',
            },
        ],
    };


    return (
        <Bar options={options} data={data} width={"95%"} height={"40vh"}/>
    );
}

export default BarChart;
