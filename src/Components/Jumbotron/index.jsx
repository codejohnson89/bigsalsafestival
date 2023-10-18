import Container from "react-bootstrap/esm/Container";
import './styles.scss';
import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import PropsType from 'prop-types';

export default function Jumbotron(props) {
    return (
        <>
            <div className="jumbotronContainer">
                <Container className="content">
                    <h1 className="display-4">{props.headerText}</h1>
                    <LinkContainer to={props.registerLink}>
                        <Button variant="primary" size="lg" className="registerButton">Register</Button>
                    </LinkContainer>
                    {/* {
                            props.hotel ? 
                            <LinkContainer to={props.hotelLink}>
                                <Button variant="primary" size="lg" className="registerButton">Hotel</Button> 
                            </LinkContainer>
                            : <></>
                        } */}
                </Container>
            </div>
        </>
    )
}

Jumbotron.propTypes = {
    headerText: PropsType.string,
    registerLink: PropsType.string.isRequired,
    hotel: PropsType.bool,
    hotelLink: PropsType.string
}