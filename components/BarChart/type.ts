import { UseQueryResult } from "@tanstack/react-query";
import { Datasets } from "../../utils/types";

export interface BarChartProps {
    QueryData: UseQueryResult<any>;
    dataChart:Datasets[] | any;
    labelsChart:string[];
}