import CardGroup from "react-bootstrap/esm/CardGroup";
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './styles.scss';

export default function PassGroupCards (props) {
    return (
        <>
            <CardGroup>
                {
                    props.data.map((card) => {
                        return (
                            <Card key={card.type}>
                                <Card.Body>
                                    <Card.Title>${card.price}</Card.Title>
                                    <Card.Text>
                                        {card.type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </CardGroup>
        </>
    )
}

PassGroupCards.propTypes = {
    data: PropTypes.array.isRequired
}