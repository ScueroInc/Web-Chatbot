import React from "react"
import MUIDataTable from "mui-datatables";
import "./index.scss";

export const SatisfactionPage: React.FC = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };
    return (
        <div className ="graf">
            <h1>Satisfaccion</h1>
            <h2>Indicador que mide la satisfacción del cliente</h2>


            <MUIDataTable
                title={"Employee List"}
                data={data}
                columns={columns}

            />
        </div>
    )
}