export function formatFilter(cadena:string) {
    // Elimina números, espacios, acentos y la barra (/), y luego junta las partes
    const cadenaLimpia = cadena.replace(/[0-9\s/]/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return cadenaLimpia;
  }