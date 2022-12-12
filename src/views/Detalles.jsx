import { useEffect, useState } from "react";
import { Row, Col as div } from "react-bootstrap";
import { useParams } from "react-router-dom";
import pokeBallImg from "../images/pokebola.png"

const Detalles = () => {
    const { name } = useParams();
    const [detail, setDetail] = useState({})
    const [imgUrl, setImgUrl] = useState("")
    const [attack, setAttack] = useState("")
    const [defense, setDefense] = useState("")
    const [speed, setSpeed] = useState("")
    const getDetail = async() => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        const res = await data.json()
        setDetail(res)
        setImgUrl(res.sprites.front_default)
        setAttack(res.stats[1].base_stat)
        setDefense(res.stats[2].base_stat)
        setSpeed(res.stats[5].base_stat)
        
    }

    useEffect(() => {
        getDetail(
            
        )
    }, [])
    console.log(imgUrl)
    /* const buscaFoto = () => {
       if(detail.sprites.front_default === null){
        return pokeBallImg
       }else{
        return detail.sprites.front_default
       }
    } */


    return(
        <div className="detallesPokemon">
            <div>
            <img src={imgUrl} alt={detail.name} />
            </div>
            <div>
                <ul>
                <li className="pokeName">{detail.name}</li>
                <li className="tituloDetalle"><span>Peso: </span> {detail.weight}</li>
                <li className="tituloDetalle"><span>Ataque: </span> {attack}</li>
                <li className="tituloDetalle"><span>Defensa: </span> {defense}</li>
                <li className="tituloDetalle"><span>Velocidad: </span> {speed}</li>
                </ul>
            </div>
            
            
        </div>
    )
}

export default Detalles;