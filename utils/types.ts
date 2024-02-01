//------------------------Interfaces-----------------------------
export interface CardResponse {
    clientes: string;
    VentasTotales: string;
    MontoTotal: string;
    Acumulado: string;
    Facturado1: string;
    Facturado2: string;
    Facturado3: string;
    mes: string;
}

export interface GraficoPulso{
    grafico:boolean;
    pulso:boolean;
}

export interface FiltrosInitialState{
    graficoPulso:GraficoPulso;
    filtroFechas:string;
    filtroFechasDias:string;
    filtClienteTransacc:string;
    filtDineroCashBack:string;
    filtroMes:string;
}

export interface DataChart{
    labels:string[];
    datasets:Datasets[];
}

export interface Datasets{
        label:string;
        data: number | number[];
        backgroundColor:string;
}

export type FilterResults = {
    [key: string]: {
      tableTitle1: string;
      titleColumns: string[];
      // otras propiedades específicas de tu objeto interno
    };
  };

//-------------------------------ENUMS------------------------------------

export enum Filtros{
    FiltroFecha="Fecha",
    FiltroFechaDias="FechaDias",
    FiltroMes="Mes",
    FiltroClienteTransacc="ClienteTransacc",
    FiltroDineroCashBack="DineroCashBack"
}

