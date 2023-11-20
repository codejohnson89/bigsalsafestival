import Spinner from "react-bootstrap/esm/Spinner";
import PropTypes from 'prop-types';
import './styles.scss';

export default function SpinnerComponent() {

 
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>
    )
}

SpinnerComponent.propTypes = {
    formSubmit: PropTypes.bool
}