import Menu from "./Menu"
import "../styles/Sobre.css" //importa css

import sobreFoto from "../assets/img/gta6.jpg"

function Sobre(){
    return(
        <div className="sobre">
            <h1>Sobre</h1>
            <h2>O CAPITALISMO SÓ VAI ACABAR QUANDO NÓS, O POVO SOVIÉTICO</h2>
            <p>Bom dia</p>
            < Menu />
            <img width={400} src={sobreFoto} alt="" />
        </div>
    )
}

export default Sobre