import React, { useEffect, useState } from "react"
import { DashboardService } from "../../../../services";
import PolarChart from "../components/PolarChart"


export const RetentionPage: React.FC  = () => {
    const [loadingInfo, setLoadingInfo] = useState(false);
    const [retentionInfo, setRetentionInfo] = useState([]);

    useEffect(() => {
        getDashRetention();
      }, [])
      
    const getDashRetention = () => {
        setLoadingInfo(true);
        DashboardService.getRetentionRate().then((response) => {
          if (response && response.data) {
              console.log(response.data);
              setRetentionInfo(response.data);
          }
          setLoadingInfo(false);
        }).catch((error) => {
          console.log(error)
          setLoadingInfo(false);
        })
      }
    return(
        <div className= "graf">
            <h1>Tasa de Retención</h1>
            <h2>Indicador que muestra el porcentaje de retención de la aplicación</h2>
            {!loadingInfo && retentionInfo && retentionInfo.length > 0 && (
            <PolarChart
                labels={retentionInfo.map((info:any) => {return  info.screenType})}
                data={retentionInfo.map((info:any) => {return  info.screenTime.toString()})}
            />
            )}
            
        </div>
    )
}