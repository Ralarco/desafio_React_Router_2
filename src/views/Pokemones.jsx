import { Row, Form, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import MyContext from "../myContext";
import { useNavigate } from "react-router";

const Pokemones = () => {
    const { poke, setPoke } = useContext( MyContext )
    const [id, setid] = useState("")
    
    return(
        <Row className="justify-content-md-center p-5">
            <h1>Selecciona un pokemon</h1>
            <Form.Select size="lg">
                {poke.map((p) => {
                    return(
                        <>
                        <option value={ p.name } > { p.name } {console.log(p.index)} </option>
                        <Button>Ver Detalle</Button>
                        </>
                    )
                }

                )}
              
            </Form.Select>
        </Row>
    )
}

export default Pokemones;