import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../../redux/store'
import { FiltrosInitialState, GraficoPulso } from '../../utils/types'

const initialState: FiltrosInitialState = {
    graficoPulso: {
        grafico: true,
        pulso: false
    },
    filtroFechas: "HOY",
    filtClienteTransacc: "Clientes",
    filtDineroCashBack: "",
    filtroMes: "Todos"
}

export const FiltrosSlice = createSlice({
    name: 'Filtros',
    initialState,
    reducers: {
        setGraficoPulsoFiltro: (state, action: PayloadAction<GraficoPulso>) => {
            state.graficoPulso = action.payload
        },
        setFiltroFechas: (state, action: PayloadAction<string>) => {
            state.filtroFechas = action.payload
        },
        setFiltroClienteTransacc: (state, action: PayloadAction<string>) => {
            state.filtClienteTransacc = action.payload
        },
        setFiltroDineroCashBack: (state, action: PayloadAction<string>) => {
            state.filtDineroCashBack = action.payload
        },
        setFiltroMes: (state, action: PayloadAction<string>) => {
            state.filtroMes = action.payload
        },
    }
})

export const { setGraficoPulsoFiltro, setFiltroFechas, setFiltroClienteTransacc, setFiltroDineroCashBack, setFiltroMes } = FiltrosSlice.actions
