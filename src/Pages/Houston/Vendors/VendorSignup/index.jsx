import Container from "react-bootstrap/esm/Container";
import VendorSignUp from "../../../../Components/VendorSignUp";
import '../../../../Utils/forms.scss';

export default function VendorApplication() {
    return (
        <>
            <Container className="formContainer">
                <VendorSignUp />
            </Container>
        </>
    )
}