import { useState } from "react";
import { ButtonSlider, Card } from "../";
import styles from "./CardsDashBoard.module.css"
import { useMutation, useQuery } from "@tanstack/react-query";
import { CardResponse } from "../../utils/types";


const CardsDashBoard: React.FC = () => {
    const [openAccordeon, setOpenAcc] = useState(true)

    const fetchFn=async()=>{
        const res = await fetch("/api/CardsMeses")
        return res.json()
    }
    const QueryCards=useQuery({
        queryKey:["cards"],
        queryFn:fetchFn
    })

    if (QueryCards.error) return <div>Request Failed</div>;
	if (QueryCards.isLoading) return <div>Loading...</div>;

    let firstC;
    const CardsList = QueryCards.data.map((elm:CardResponse, i:number) => {
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
            position={Number(i.toString() + "3")} />
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