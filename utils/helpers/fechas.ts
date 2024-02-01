export function obtenerNumeroDeMes(mes: string) {
    const meses: { [key: string]: number } = {
        enero: 1,
        febrero: 2,
        marzo: 3,
        abril: 4,
        mayo: 5,
        junio: 6,
        julio: 7,
        agosto: 8,
        septiembre: 9,
        octubre: 10,
        noviembre: 11,
        diciembre: 12,
    };

    const mesLowerCase = mes.toLowerCase();

    if (meses.hasOwnProperty(mesLowerCase)) {
        if (meses[mesLowerCase].toString().length === 1) {
            return "0" + meses[mesLowerCase].toString()
        }
        else{
            return meses[mesLowerCase].toString();
        }
    } else {
        console.error("Mes no válido");
        return null;
    }
}