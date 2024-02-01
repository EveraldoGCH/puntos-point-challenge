import { useState, useEffect } from 'react';
import { useAppSelector } from "../redux/hooks";
import { UseQueryResult } from '@tanstack/react-query';


const useFilterPulso = (QueryData:UseQueryResult<any>) => {
    const { filtroPulso, filtroMes } = useAppSelector(state => state.filtros)
    const [labelsChart, setLabels] = useState(QueryData.data.map((e:any)=>e.mes))
    const [dataChart, setData] = useState([
        {
            label: 'Día 01',
            data: [0,1,2],
            backgroundColor: '#EB3535',
        },
        {
            label: 'Día 10',
            data: [0,1,2],
            backgroundColor: '#EB7635',
        },
        {
            label: 'Día 20',
            data: [0,1,2],
            backgroundColor: '#358DEB',
        },
    ])

    function pulsoFilter(filtro: string) {
        let label: Array<string>;
        let data: Array<number> | any;
        const numeroRandom = Math.floor(Math.random() * 1000) + 1;

        switch (filtro) {
            case "PULSO":
                label = QueryData.data.map((e:any)=>e.mes)
                data = dataChart.map((elm, i) => {
                    console.log("ELEMENTO", i, elm,[QueryData.data[i].Facturado1, QueryData.data[i].Facturado2, QueryData.data[i].Facturado3 ])
                    return {
                        label: elm.label,
                        data: QueryData.data.map((e:any)=>e["Facturado"+(i+1)]),
                        backgroundColor: elm.backgroundColor
                    };
                });
                console.log(QueryData.data[0])
                setLabels(label)
                setData(data)
                break;
        }
    }

    useEffect(() => {
        pulsoFilter(filtroPulso)
    }, [filtroPulso, filtroMes]);

    return {
        labelsChart, dataChart
    };
};

export default useFilterPulso;
