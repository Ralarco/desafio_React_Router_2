import { Row, Form, Button } from "react-bootstrap";
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
        <Row className="justify-content-md-center p-5">
            <h1>Selecciona un pokemon</h1>
            <Form>
                <Form.Select defaultValue="Pokemones" size="lg" onChange={({ target }) => setName(target.value)}>
                    <option>Open this select menu</option>
                    {poke.map((p) => {
                        return <option key={p.name} value={p.name}>{ p.name }</option>
                    })}
                    
                </Form.Select>
                <Button variant="dark" type="submit" onClick={irAPokemones}>Ver Detalle</Button>
            </Form>
            
        </Row>
    )
}

export default Pokemones;