import { Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import pikachuIMG from "../images/pikachuHome.png"
const Home = () => {
    return(
        <Row className="text-center p-4 homeCont m-auto" >
            <h1>Bienvenido Maestro Pokemon</h1>
            <Image src={ pikachuIMG } alt="pikachu" className="homeImg" fluid />

        </Row>
    )
}

export default Home;