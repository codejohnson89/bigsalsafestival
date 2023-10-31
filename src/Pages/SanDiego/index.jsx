import { Container } from "react-bootstrap";
import EventHomeJumbotron from "../../Components/EventHomeJumbotron";
import { SanDiegoHomeContent } from "../../Utils/Content";
import EventHomeAbout from "../../Components/EventHomeAbout";
import EventHomeTakeAction from "../../Components/EventHomeTakeAction";
import EventHomePass from "../../Components/EventHomePass";
import EventHomeTimeline from "../../Components/EventHomeTimeline";
import { TimeLinePass } from "../../Utils/Content";

export default function SanDiegoHome() {
    return (
        <>
            <EventHomeJumbotron containerID="sd" background={SanDiegoHomeContent.backgroundImage} hotelLink={SanDiegoHomeContent.hotelLink} logo={SanDiegoHomeContent.logo}/>
            <Container>
                <EventHomeAbout date={SanDiegoHomeContent.date} about={SanDiegoHomeContent.aboutUs}/>
            </Container>
            <Container className="actions">
                <EventHomeTakeAction />
            </Container>
            <Container className="pass">
                <EventHomePass />
            </Container>
            <Container className="timeline">
                <EventHomeTimeline timeline={TimeLinePass.sd}/>
            </Container>
        </>
    )
}