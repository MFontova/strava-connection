const Header = ({activitiesList}) => {
    console.log(activitiesList)
    const lastActivity = activitiesList[0]
    
    return (
        <section className="bg-emerald-500">
            <p className="text-white text-center text-5xl font-bold py-3">Congrats!</p>
            <p className="text-white text-center text-xl py-5">Última activitat:</p>
            <p className="text-white text-center text-xl">Has corregut <span className="font-semibold">{(lastActivity.distance/1000).toFixed(2)} km</span> amb <span className="font-semibold">{Math.trunc(lastActivity.moving_time/60)} minuts</span></p>
            <p className="text-white text-center text-xl font-semibold underline pt-5">Veure activitat</p>
        </section>
    )
}

export default Header