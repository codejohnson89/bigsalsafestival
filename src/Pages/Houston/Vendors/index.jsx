import Container from "react-bootstrap/esm/Container";
import Jumbotron from "../../../Components/Jumbotron";
import VendorContent from "../../../Components/VendorContent";

export default function Vendors() {
    return (
        <>
            <Jumbotron registerLink='./SignUp' headerText="Become A Vendor Here"/>
            <Container>
                <VendorContent />
            </Container>
        </>
    )
}