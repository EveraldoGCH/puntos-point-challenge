import { useState } from "react";
import { ButtonSlider, Card } from "../";
import styles from "./CardsDashBoard.module.css"
import { CardResponse } from "../../utils/types";
import { CardsDashBoardProps } from "./type";


const CardsDashBoard: React.FC<CardsDashBoardProps> = ({QueryData}) => {
    const [openAccordeon, setOpenAcc] = useState(true)

    

    if (QueryData.error) return <div>Request Failed</div>;
	if (QueryData.isLoading) return <div>Cargando...</div>;

    const CardsList = QueryData.data.map((elm:CardResponse, i:number) => {
        return <Card mes={elm.mes}
            clientes={elm.clientes}
            VentasTotales={elm.VentasTotales}
            MontoTotal={elm.MontoTotal}
            Acumulado={elm.Acumulado}
            Facturado1={elm.Facturado1}
            Facturado2={elm.Facturado2}
            Facturado3={elm.Facturado3}
            isOpen={openAccordeon}
            firstCard={i == 0 ? true : false}
            position={Number(i.toString() + "3")} 
            key={elm.mes}/>
    }
    )
    return (
        <article className={styles.DBoard2}>
            <ButtonSlider setOpenAcc={setOpenAcc} openAccordeon={openAccordeon} />
            <div className={`${openAccordeon ? `${styles.CardsCont}` : `${styles.CardsContContracted}`}`}>
                {CardsList}

            </div>
        </article>
    );
}

export default CardsDashBoard;