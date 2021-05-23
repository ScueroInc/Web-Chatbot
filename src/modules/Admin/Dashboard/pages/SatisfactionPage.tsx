import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables";
import "./index.scss";
import { DashboardService } from "../../../../services";

export const SatisfactionPage: React.FC = () => {
  const columns = ["Nombre", "Apellido", "Género", "Comentario", "Puntuación"];
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [satisfactionInfo, setSatisfactionInfo] = useState([]);

  useEffect(() => {
    getDashSatisfaction();
  }, [])

  const getDashSatisfaction = () => {
    setLoadingInfo(true);
    DashboardService.getSurvey().then((response) => {
      if (response && response.data) {
        console.log(response.data);
        setSatisfactionInfo(response.data);
      }
      setLoadingInfo(false);
    }).catch((error) => {
      console.log(error)
      setLoadingInfo(false);
    })
  }
  const data = satisfactionInfo.map((info: any) => {
    return [info.firstName, info.lastName, info.gender, info.comment, info.punctuation.toString()];
  }); 
  return (
    <div className="graf">
      <h1>Satisfacción</h1>
      <h2>Indicador que mide la satisfacción del cliente</h2>

      {!loadingInfo && satisfactionInfo && satisfactionInfo.length > 0 && (
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}

        />
      )}

    </div>
  )
}