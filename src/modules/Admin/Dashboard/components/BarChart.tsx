import { Bar } from "react-chartjs-2"
import React from 'react'
import {} from 'chart.js' 

interface IProps {
    labels: any;
    title:any;
    data: any;
  }

const BarChart: React.FC<IProps> = (props) =>{
    return(
        <div>
            
            <Bar
            type= 'bar'
            height={600}
            width = {800}
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
                maintainAspectRatio: false,

                scales:{
                    y: {
                        beginAtZero: true,
                    }
                }
            }}
            />

        
           
        </div>
    )
}

export default BarChart