import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../../redux/store'
import { FiltrosInitialState, GraficoPulso } from '../../utils/types'

const initialState: FiltrosInitialState = {
    graficoPulso:{
        grafico: true,
        pulso: false
    }
    
}

export const FiltrosSlice = createSlice({
    name: 'Filtros',
    initialState,
    reducers: {
        setGraficoPulsoFiltro: (state, action: PayloadAction<GraficoPulso>) => {
            state.graficoPulso = action.payload
        },
    }
})

export const { setGraficoPulsoFiltro } = FiltrosSlice.actions
