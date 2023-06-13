import { act } from "react-dom/test-utils"
import { rithmCalc, rithmCalc as rythm } from "../logic/rithmCalc"

export const LastActivity = ({activity}) => {
    console.log(activity)
    const time = activity.moving_time
    const distance = activity.distance
    console.log(time, distance)

    const rythm = ((time,distance) => {
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

    // console.log(rythm(time, distance))
    return (
        <div className="border rounded p-5">
            <h3 className="text-center text-xl underline">{activity.name}</h3>
            <div className="flex flex-row justify-center gap-3">
                <p>{(activity.distance/1000).toFixed(2)}km</p>
                <p>·</p>
                <p>{Math.trunc(activity.moving_time/60)}min</p>
                <p>·</p>
                <p>{rythm(activity.moving_time, activity.distance)} min/km</p>
            </div>
        </div>
    )
}