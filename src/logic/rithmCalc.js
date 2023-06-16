export const rythm = ((time,distance) => {
    const distanciaEnKilometros = distance / 1000;

    // Calcular el ritmo en minutos por kilómetro
    const ritmoEnMinutosPorKilometro = time / 60 / distanciaEnKilometros;

    // Redondear el ritmo a dos decimales
    const ritmoRedondeado = ritmoEnMinutosPorKilometro.toFixed(2);

    const minutos = Math.floor(ritmoEnMinutosPorKilometro)
    const segundos = Math.round((ritmoEnMinutosPorKilometro % 1) * 60)
    const segundosStr = segundos.toString().length == 1 ? '0' + segundos.toString() : segundos.toString()

    return minutos+':'+segundosStr
})