export function formatearNum(numeroString:string) {
    const numero = parseFloat(numeroString.replace(/[^\d.-]/g, ''));
    const formatoNumero = numero.toLocaleString('es-ES');
  
    return formatoNumero;
  }