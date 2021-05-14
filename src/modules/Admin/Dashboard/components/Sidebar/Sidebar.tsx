import { NavLink } from "react-router-dom"
import "./index.scss";

const Sidebar = () => {
    return (
        <div className="sidebar2">
            <ul>
                <li>
                    <NavLink to= "/dashboard/usability" exact className= "rounded py-2"
                    activeClassName="active"> Usabilidad</NavLink>
                </li>
                <li>
                    <NavLink to= "/dashboard/satisfaction" 
                    activeClassName="active"> Satisfacción</NavLink>
                </li>
                <li>
                    <NavLink to= "/dashboard/userage" 
                    activeClassName="active"> Edad de los Usuarios</NavLink>
                </li>
                <li>
                    <NavLink to= "/dashboard/retentionrate" 
                    activeClassName="active"> Tasa de Retención</NavLink>
                </li>
                <li>
                    <NavLink to= "/dashboard/faq" 
                    activeClassName="active"> Preguntas Frecuentes</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar