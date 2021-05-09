import { Link } from "react-router-dom"
import "./index.scss";
const Sidebar = () => {
    return (
        <div className="sidebar2">
            <ul>
                <li>
                    <Link to= "/dashboard/usability" className="btn btn-primary"> Usabilidad</Link>
                </li>
                <li>
                    <Link to= "/dashboard/satisfaction"> Satisfacción</Link>
                </li>
                <li>
                    <Link to= "/dashboard/userage"> Edad de los Usuarios</Link>
                </li>
                <li>
                    <Link to= "/dashboard/retentionrate"> Tasa de Retención</Link>
                </li>
                <li>
                    <Link to= "/dashboard/faq"> Preguntas Frecuentes</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar