import CardGroup from "react-bootstrap/esm/CardGroup";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import { TakeAction } from "../../Utils/Content";
import { LinkContainer } from "react-router-bootstrap";
import './styles.scss';

export default function EventHomeTakeAction() {
    return (
        <>
            <div className="takeActionContainer">
                <h2>Take action!</h2>
                <CardGroup className="cardGroup">

                {
                    TakeAction.map((card, index) => {
                        return (
                            <Card key={index} className="action">
                                <Card.Img variant="top" src={card.image} />
                                    <div className="contentContainer">
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.content}</Card.Text>
                                    </div>
                                    <div className="buttonContainer">
                                        <LinkContainer to={card.link}>
                                            <Button variant="primary" size="lg" className="registerButton customBtn">{card.button}</Button>
                                        </LinkContainer>
                                    </div>
                            </Card>
                        )})
                    }
                </CardGroup>
            </div>
        </>
    )
}