export interface ChipsProps{
    label:string;
    icon?:JSX.Element;
    style?:{};
    tipoFiltro:string;
}

export enum Variant{
    filled="filled",
    outlined="outlined"
}