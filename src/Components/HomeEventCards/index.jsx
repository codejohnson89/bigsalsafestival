import CardGroup from "react-bootstrap/esm/CardGroup";
import Card from 'react-bootstrap/Card';
import { HomeCards } from "../../Utils/Content";
import styles from './styles.module.scss';
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/esm/Button";

export default function HomeEventCards () {
    return (
        <>
            <div className={styles.cardEvents}>
            <h2>View our events!</h2>
            <CardGroup className={styles.cardGroup}>

                {
                    HomeCards.map((card, index) => {
                        return (
                            <Card key={index} className={[styles.event, 'col-sm-4'].join(' ')}>
                                <Card.Img variant="top" src={card.bgImg} />
                                <Card.ImgOverlay className={styles.overlay}>
                                    <div className={styles.logoContainer}>
                                        <img src={card.logo} alt="logo" className="logo" width="150px"/>
                                    </div>
                                    <div className={styles.weekendContainer}>
                                        <Card.Title>{card.date}</Card.Title>
                                        <Card.Text>{card.weekend}</Card.Text>
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <LinkContainer to={card.link}>
                                            <Button variant="primary" size="lg" className="registerButton customBtn">View event</Button>
                                        </LinkContainer>
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        )})
                }
            </CardGroup>
            </div>
        </>
    )
}