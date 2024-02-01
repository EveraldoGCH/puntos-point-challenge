import { useState, useEffect } from 'react';
import { useAppSelector } from "../redux/hooks";


const useFilterGraphic = () => {
    const { filtroFechas, filtroFechasDias, filtClienteTransacc } = useAppSelector(state => state.filtros)
    const [labelsChart, setLabels] = useState(["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"])
    const [dataChart, setData] = useState([])

    function LabelsFilter(filtro: string) {
        let label: Array<string>;
        let data: Array<number> | any;
        let dataChartBase=[
            {
                label: 'Clientes totales',
                data: 0,
                backgroundColor: '#EB3535',
            },
            {
                label: 'Clientes nuevos',
                data: labelsChart.map(e => (e.replace(":", "")) + Math.random()),
                backgroundColor: '#EB7635',
            },
            {
                label: 'Compraron',
                data: labelsChart.map(e => Number(e.replace(":", "")) - Math.random()),
                backgroundColor: '#358DEB',
            },
            {
                label: 'No compraron',
                data: 0,
                backgroundColor: '#2DCF5A',
            },
        ]
        const numeroRandom = Math.floor(Math.random() * 1000) + 1;

        switch (filtro) {
            case "HOY":
                label = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
                data = dataChartBase.map((elm) => {
                    return {
                        label: elm.label,
                        data: elm.data !== 0 ? label.map(e => Math.floor(Math.random() * 1000) + 1) : 0,
                        backgroundColor: elm.backgroundColor
                    };
                });
                setLabels(label)
                setData(data)
                break;
            case "7D":
                label = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
                data = dataChartBase.map((elm) => {
                    return {
                        label: elm.label,
                        data: elm.data !== 0 ? label.map(e => Math.floor(Math.random() * 1000) + 1) : 0,
                        backgroundColor: elm.backgroundColor
                    };
                });
                setLabels(label)
                setData(data)
                break;
            case "YTD/YTG":
                let dataChartYTDYTG=[{
                    label: '2022',
                    data: [7000000],
                    backgroundColor: '#EB3535',
                },
                {
                    label: '2023',
                    data: [8000000],
                    backgroundColor: '#7A35EB',
                }]
                label = [""]
                data = dataChartYTDYTG.map((elm) => {
                    return {
                        label: elm.label,
                        data: elm.data,
                        backgroundColor: elm.backgroundColor
                    };
                });
                console.log(data)
                setLabels(label)
                setData(data)
                break;
        }
    }

    useEffect(() => {
        console.log("WTF",filtroFechas)
        LabelsFilter(filtroFechas)
    }, [filtroFechas, filtroFechasDias, filtClienteTransacc]);

    return {
        labelsChart, dataChart
    };
};

export default useFilterGraphic;
