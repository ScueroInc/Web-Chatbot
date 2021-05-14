import React, { useEffect, useState } from "react"
import { DashboardService } from "../../../../services";
import PieChart from "../components/PieChart"


export const FAQPage: React.FC = () => {


    const [loadingInfo, setLoadingInfo] = useState(false);
    const [FAQInfo, setFAQInfo] = useState<any>({});

    useEffect(() => {
        getFAQ();
    }, [])

    const getFAQ = () => {
        setLoadingInfo(true);
        DashboardService.getQuestions().then((response) => {
            if (response && response.data) {
                console.log(response.data);
                setFAQInfo(response.data);
            }
            setLoadingInfo(false);
        }).catch((error) => {
            console.log(error)
            setLoadingInfo(false);
        })
    }

    return (
        <div> <h1>Preguntas Frecuentes</h1>
    
        <h2>Lista de preguntas sobre recomendaciones y problemas de la aplicación.</h2>
            <div style={{ display: "flex" }}>

                <div>

                    {!loadingInfo && FAQInfo && FAQInfo.rightAnswered && FAQInfo.rightAnswered.length > 0 && (
                        <PieChart
                            labels={FAQInfo.rightAnswered.map((info: any) => { return info.questionText })}
                            title='Preguntas'
                            data={FAQInfo.rightAnswered.map((info: any) => { return info.quantity.toString() })}
                            display={true}
                            legend ='FRECUENCIA DE LAS PREGUNTAS RESPONDIDAS CORRECTAMENTE MÁS FRECUENTES '
                        />
                    )}
                </div>
                <div>
                    {!loadingInfo && FAQInfo && FAQInfo.wrongAnswered && FAQInfo.wrongAnswered.length > 0 && (
                        <PieChart
                            labels={FAQInfo.wrongAnswered.map((info: any) => { return info.questionText })}
                            title='Preguntas'
                            data={FAQInfo.wrongAnswered.map((info: any) => { return info.quantity.toString() })}
                            display={true}
                            legend ='FRECUENCIA DE LAS PREGUNTAS RESPONDIDAS ERRÓNEAMENTE MÁS FRECUENTES '
                        />
                    )}
                </div>
            </div>
        </div>
    )
}