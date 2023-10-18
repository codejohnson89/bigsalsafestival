import Container from "react-bootstrap/esm/Container";
import logo from '../Assets/bigSalsaFestivalSDlogo.webp'
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";

export default function Home () {

    return (
        <>
            <div className="homeContainer">
                <div className="homeJumbotron">
                    <Container>
                        <img src={logo} alt="logo" className="logo"/>
                        <div className="buttonContainer">
                            <LinkContainer to="/register">
                                <Button variant="primary" size="lg" className="registerButton customBtn">Purchase Pass</Button>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Button variant="primary" size="lg" className="hotelButton customBtn">Book Hotel</Button>
                            </LinkContainer>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}