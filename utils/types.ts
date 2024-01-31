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
}

