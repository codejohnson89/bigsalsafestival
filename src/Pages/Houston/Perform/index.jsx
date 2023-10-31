import Container from "react-bootstrap/esm/Container";
import Jumbotron from "../../../Components/Jumbotron";
import PerformerContent from "../../../Components/PerformerContent";
import { NewYorkAdultPrices, NewYorkKidsPrices } from "../../../Utils/Content";


export default function Perform() {
    return (
        <>
            <Jumbotron registerLink='./SignUp' headerText="Register Your Team Below"/>
            <Container >
                <PerformerContent kidPrices={NewYorkKidsPrices} adultPrices={NewYorkAdultPrices} registerLink='./SignUp'/>
            </Container>
        </>
    )
}