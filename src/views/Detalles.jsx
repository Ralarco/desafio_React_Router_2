import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        getDetail()
    }, [])


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