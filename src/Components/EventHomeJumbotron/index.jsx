import { Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropsType from 'prop-types';
import './styles.scss';

export default function EventHomeJumbotron(props) {
    return (
        <>
            <div id={props.containerID} className="jumbotronContainer" style={{backgroundImage: `url(${props.background})`}}>
                <Container className="content">
                    <div className='logoContainer'>
                        <img src={props.logo} alt="logo" className="logo" />
                    </div>  
                    <LinkContainer to={props.hotelLink}>
                        <Button variant="primary" size="lg" className="registerButton">Purchase Pass</Button>
                    </LinkContainer>
                </Container>
            </div>
        </>
    )
}

EventHomeJumbotron.propTypes = {
    hotelLink: PropsType.string.isRequired,
    background: PropsType.string.isRequired,
    logo: PropsType.string.isRequired,
    containerID: PropsType.string.isRequired
}