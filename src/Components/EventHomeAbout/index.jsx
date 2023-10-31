import PropsType from 'prop-types';
import './styles.scss';

export default function EventHomeAbout(props) {
    return (
        <>
            <div className="aboutContainer">
                <h2>{props.date}</h2>
                <p>{props.about}</p>
            </div>
        </>
    )
}

EventHomeAbout.propTypes = {
    date: PropsType.string.isRequired,
    about: PropsType.string.isRequired
}