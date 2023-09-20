import alimentacion from "./assets/images/alimentacion.svg"
import salud from "./assets/images/salud.svg"
import otros from "./assets/images/otros.svg"
import transporte from "./assets/images/transporte.svg"
import utilidades from "./assets/images/utilidades.svg"
import { IconTheme } from "./Components/UI"

export default (type) =>{
    const images ={
        Restaurante: <IconTheme src={alimentacion} alt="Restaurante" />,
        Salud: <IconTheme src={salud} alt="Salud" />,
        Transporte: <IconTheme src={transporte} alt="Transporte" />,
        Utilidades: <IconTheme src={utilidades} alt="Utilidades" />,
        default: <IconTheme src={otros} alt="Otros"/>

    }

    return images[type] || images["default"];
};