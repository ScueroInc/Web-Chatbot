import React from 'react'
import {} from 'chart.js' 
import { Pie } from 'react-chartjs-2'

interface IProps {
    labels: any;
    title: any;
    data: any;
    display: any;
    legend?: any;
}

const PieChart: React.FC<IProps> = (props) =>{
    return (
        <div>
        <Pie
        type= 'pie'
        height={600}
        width = {800}
        data={{
        labels: props.labels,//['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets:[
            {
                label: props.title,//'Preguntas',
                data: props.data,//[12,19,3,5,2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                    ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
          ],
        }}

        options={{
            maintainAspectRatio: false,
            plugins:{
                legend: {
                    position: 'top',
                },
                title: {
                    text: props.legend,
                    display: props.display,
                    color: 'rgb(0, 191, 255)',
                    font: {
                        size:15,
                        weight: 'normal'
                    }
                }

            }
        }}
        />
        
        </div>
    )
}

export default PieChart