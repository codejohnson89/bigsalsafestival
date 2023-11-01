import Container from "react-bootstrap/esm/Container";
import VolunteerForm from "../../../../Components/VolunteerSignUp";

export default function VolunteerSignUp() {
    return (
        <>
            <Container className="formContainer">
                <VolunteerForm />
            </Container>
        </>
    )
}