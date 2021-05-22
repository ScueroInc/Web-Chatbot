import React, { useEffect, useState } from "react"
import { DashboardService } from "../../../../services";
import BarChart from "../components/BarChart"
import "./index.scss";

export const UsabilityPage: React.FC  = () => {

    const [loadingInfo, setLoadingInfo] = useState(false);
    const [usabilityInfo, setUsabilityInfo] = useState([]);

    useEffect(() => {
        getDashUsability();
      }, [])
      
    const getDashUsability = () => {
        setLoadingInfo(true);
        DashboardService.getUsabilityRate().then((response) => {
          if (response && response.data) {
              console.log(response.data);
              setUsabilityInfo(response.data);
          }
          setLoadingInfo(false);
        }).catch((error) => {
          console.log(error)
          setLoadingInfo(false);
        })
      }
    return(
        <div className="graf">
            <h1 className="dash-title">Usabilidad</h1>
            <h2>Indicador que permite ver el entorno y las interacciones del usuario</h2>
            {!loadingInfo && usabilityInfo && usabilityInfo.length > 0 && (
            <BarChart
                labels={usabilityInfo.map((info:any) => {return  info.month + " " + info.yearInt})}
                title='Numero de interacciones por mes'
                data={usabilityInfo.map((info:any) => {return  info.quantity.toString()})}
                display = {true}
                legend ='Interacciones'
            />
            )}
            
            
        </div>
    )
}