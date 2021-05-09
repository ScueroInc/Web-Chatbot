import React from "react"
import PolarChart from "../components/PolarChart"


export const RetentionPage: React.FC  = () => {
    return(
        <div>
            <h1>Tasa de Retención</h1>
            <PolarChart
                labels={['Red', 'Blue', 'Yellow', 'Green', 'Violet']}
                title='Preguntas'
                data={[12,15,3,5,2]}
            />
        </div>
    )
}