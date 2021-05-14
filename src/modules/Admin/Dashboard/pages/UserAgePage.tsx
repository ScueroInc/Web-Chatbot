import React, { useEffect, useState } from "react"
import PieChart from "../components/PieChart"
import {DashboardService} from '../../../../services'


export const UserAgePage: React.FC  = () => {

    const [loadingInfo, setLoadingInfo] = useState(false);
    const [ageInfo, setAgeInfo] = useState([]);

    useEffect(() => {
        getDashAge();
      }, [])
      
    const getDashAge = () => {
        setLoadingInfo(true);
        DashboardService.getAgeRange().then((response) => {
          if (response && response.data) {
              console.log(response.data);
            setAgeInfo(response.data);
          }
          setLoadingInfo(false);
        }).catch((error) => {
          console.log(error)
          setLoadingInfo(false);
        })
      }

    return(
        <div>
            <h1>Edad de los Usuarios</h1>
           {!loadingInfo && ageInfo && ageInfo.length > 0 && (
                <PieChart
                labels={ageInfo.map((info:any) => { return info.age + " Años"})}
                title='Preguntas'
                data={ageInfo.map((info:any) => { return info.quantity.toString()})}
                display = {false}
            />
           )}
        </div>
    )
}