import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import logo from '../Assets/bigSalsaFestivalSDlogo.webp'
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";
import HomeEventCards from "../Components/HomeEventCards";

export default function Home () {

    return (
        <>
            <div className="homeContainer">
                <div className="homeJumbotron">
                    <Container>
                        <Row>
                            <img src={logo} alt="logo" className="logo" width="350px"/>
                            <div className="buttonContainer">
                                <LinkContainer to="/register">
                                    <Button variant="primary" size="lg" className="registerButton customBtn">Purchase Pass</Button>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Button variant="primary" size="lg" className="hotelButton customBtn">Book Hotel</Button>
                                </LinkContainer>
                            </div>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <HomeEventCards/>
                    </Row>
                </Container>
            </div>
        </>
    )
}