import React from 'react'
import {} from 'chart.js' 
import { PolarArea } from 'react-chartjs-2'


interface IProps {
    labels: any;
    title:any;
    data: any;
}

const PolarChart: React.FC<IProps> = (props) =>{
    return (
        <div>
        <PolarArea
        type= 'polarArea'
        data={{
        labels: props.labels,
        datasets:[
            {
                label: props.title,
                data: props.data,
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
            maintainAspectRatio: true,
        }}
        />
        
        </div>
    )
}

export default PolarChart