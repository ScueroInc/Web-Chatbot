import React from "react"
import BarChart from "../components/BarChart"

export const UsabilityPage: React.FC  = () => {
    return(
        <div>
            <h1 className="dash-title">Usabilidad</h1>
            
            <BarChart
                labels={['Red', 'Blue', 'Yellow', 'Green', 'Violet']}
                title='Preguntas'
                data={[12,15,3,5,2]}
            />
            
            
        </div>
    )
}