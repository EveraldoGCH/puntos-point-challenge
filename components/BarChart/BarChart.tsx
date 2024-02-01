import * as React from 'react';
import { BarChartProps } from "./type";
import styles from "./BarChart.module.css"
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
import useFilterGraphic from '../../hooks/useFilterGraphic';
import { useAppSelector } from "../../redux/hooks";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const BarChart: React.FC<BarChartProps> = ({ QueryData }) => {
    const { labelsChart, dataChart } = useFilterGraphic()
    const { filtroFechas } = useAppSelector(state => state.filtros)


    if (QueryData.error) return <div>Request Failed</div>;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: filtroFechas==="YTD/YTG",
                text: 'YTG'
            },
        },
    };

    const labels = labelsChart

    const data: DataChart | any = {
        labels,
        datasets: dataChart,
    };
    if (filtroFechas === "YTD/YTG") {
        return (
            <div className={styles.DoubleChart}>
                <div className={styles.Chart}>
                    <Bar options={options} data={data} width={"47%"} height={"40vh"} />
                </div>
                <div className={styles.Chart}>
                    <Bar options={options} data={data} width={"47%"} height={"40vh"} />
                </div>
            </div>)
    }
    else {
        return (
            <Bar options={options} data={data} width={"95%"} height={"40vh"} style={{ width: 100 }} />
        );
    }



}

export default BarChart;
