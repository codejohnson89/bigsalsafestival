import Container from "react-bootstrap/esm/Container";
import Jumbotron from "../../../Components/Jumbotron";
import VolunteerContent from "../../../Components/VolunteerContent";

export default function Volunteer() {
    return (
        <>
            <Jumbotron registerLink='./SignUp' headerText="Become A Volunteer Here"/>
            <Container>
                <VolunteerContent />
            </Container>
        </>
    )
}