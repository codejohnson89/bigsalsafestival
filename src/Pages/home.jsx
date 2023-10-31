import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import logo from '../Assets/bigSalsaFestivalSDlogo.webp';
import Button from "react-bootstrap/esm/Button";
import HomeEventCards from "../Components/HomeEventCards";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home () {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="homeContainer">
                <div className="homeJumbotron">
                    <Container>
                        <Row>
                            <img src={logo} alt="logo" className="logo" width="350px"/>
                            <div className="buttonContainer">
                                <Link target="_blank" to="/register">
                                    <Button variant="primary" size="lg" className="registerButton customBtn">Purchase Pass</Button>
                                </Link>
                                <Link target="_blank" to="/register">
                                    <Button variant="primary" size="lg" className="hotelButton customBtn">Book Hotel</Button>
                                </Link>
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