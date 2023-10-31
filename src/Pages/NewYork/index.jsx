import { Container } from "react-bootstrap";
import EventHomeJumbotron from "../../Components/EventHomeJumbotron";
import { NewYorkHomeContent } from "../../Utils/Content";
import EventHomeAbout from "../../Components/EventHomeAbout";
import EventHomeTakeAction from "../../Components/EventHomeTakeAction";
import EventHomePass from "../../Components/EventHomePass";
import EventHomeTimeline from "../../Components/EventHomeTimeline";
import { TimeLinePass } from "../../Utils/Content";
import './styles.scss';

export default function NewYorkHome() {
    return (
        <>
            <EventHomeJumbotron containerID="nyc" background={NewYorkHomeContent.backgroundImage} hotelLink={NewYorkHomeContent.hotelLink} logo={NewYorkHomeContent.logo}/>
            <Container>
                <EventHomeAbout date={NewYorkHomeContent.date} about={NewYorkHomeContent.aboutUs}/>
            </Container>
            <Container className="actions">
                <EventHomeTakeAction />
            </Container>
            <Container className="pass">
                <EventHomePass />
            </Container>
            <Container className="timeline">
                <EventHomeTimeline timeline={TimeLinePass.nyc}/>
            </Container>
        </>
    )
}