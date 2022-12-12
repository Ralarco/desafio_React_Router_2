import { Row as div, Form, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import MyContext from "../myContext";
import { useNavigate } from "react-router";

const Pokemones = () => {
    const { poke, setPoke } = useContext( MyContext )
    const [name, setName] = useState("")

    const navigate = useNavigate();
    const irAPokemones = () => navigate(`/Detalles/${name}`);
   
   /*  useEffect(() => {
        irAPokemones()
    }, [name]) */

    
    
    return(
        <div className="selectorContainer">
            <h1>Selecciona un pokemon</h1>
            <Form>
                <Form.Select defaultValue="Pokemones" size="lg" onChange={({ target }) => setName(target.value)}>
                    <option>Pokemones</option>
                    {poke.map((p) => {
                        return <option key={p.name} value={p.name}>{ p.name }</option>
                    })}
                    
                </Form.Select>
                <Button variant="dark" type="submit" className="m-2 p-3" onClick={irAPokemones}>Ver Detalle</Button>
            </Form>
            
        </div>
    )
}

export default Pokemones;