import { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyContext from "../myContext";
import { useParams } from "react-router-dom";

const Detalles = () => {
    const { name } = useParams();
    const { poke, setPoke } = useContext(MyContext)
    const [detail, setDetail] = useState({})
    const getDetail = async() => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        const res = await data.json()
        setDetail(res)
        console.log(res)
    }
    useEffect(() => {
        getDetail()
    }, [])
    return(
        <Row>
            <ul>
            <li className="tituloDetalle">Nombre: {detail.name}</li>
            <li className="tituloDetalle">Peso: {detail.weight}</li>
            </ul>
            
        </Row>
    )
}

export default Detalles;