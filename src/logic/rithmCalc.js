export const rithmCalc = ({time, distance}) => {
    console.log(time,distance)
    // Convertir la distancia de metros a kilómetros
    const distanciaEnKilometros = distance / 1000;

    // Calcular el ritmo en minutos por kilómetro
    const ritmoEnMinutosPorKilometro = time / 60 / distanciaEnKilometros;

    // Redondear el ritmo a dos decimales
    const ritmoRedondeado = ritmoEnMinutosPorKilometro.toFixed(2);

    return ritmoRedondeado
}