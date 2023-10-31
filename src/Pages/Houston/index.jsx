import { Container } from "react-bootstrap";
import EventHomeJumbotron from "../../Components/EventHomeJumbotron";
import { HoustonHomeContent } from "../../Utils/Content";
import EventHomeAbout from "../../Components/EventHomeAbout";
import EventHomeTakeAction from "../../Components/EventHomeTakeAction";
import EventHomePass from "../../Components/EventHomePass";
import EventHomeTimeline from "../../Components/EventHomeTimeline";
import { TimeLinePass } from "../../Utils/Content";

export default function HoustonHome() {
    return (
        <>
            <EventHomeJumbotron containerID="hou" background={HoustonHomeContent.backgroundImage} hotelLink={HoustonHomeContent.hotelLink} logo={HoustonHomeContent.logo}/>
            <Container>
                <EventHomeAbout date={HoustonHomeContent.date} about={HoustonHomeContent.aboutUs}/>
            </Container>
            <Container className="actions">
                <EventHomeTakeAction />
            </Container>
            <Container className="pass">
                <EventHomePass />
            </Container>
            <Container className="timeline">
                <EventHomeTimeline timeline={TimeLinePass.hou}/>
            </Container>
        </>
    )
}