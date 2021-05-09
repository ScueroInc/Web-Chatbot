import React from "react"
import PieChart from "../components/PieChart"


export const UserAgePage: React.FC  = () => {
    return(
        <div>
            <h1>Edad de los Usuarios</h1>
            <PieChart
                labels={['Red', 'Blue', 'Yellow', 'Green', 'Violet']}
                title='Preguntas'
                data={[12,15,3,5,2]}
            />
        </div>
    )
}