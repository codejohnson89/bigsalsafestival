import { Container, Button } from 'react-bootstrap';
import PropsType from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function EventHomeJumbotron(props) {
    return (
        <>
            <div id={props.containerID} className="jumbotronContainer" style={{backgroundImage: `url(${props.background})`}}>
                <Container className="content">
                    <div className='logoContainer'>
                        <img src={props.logo} alt="logo" className="logo" />
                    </div>  
                    <Link target='_blank' to={props.hotelLink}>
                        <Button variant="primary" size="lg" className="registerButton">Purchase Pass</Button>
                    </Link>
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