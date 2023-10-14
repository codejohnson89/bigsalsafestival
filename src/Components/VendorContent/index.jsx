import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import './styles.scss';

export default function VendorContent() {
    return (
        <>
            <div className="vendorContainer">
                <p>With over 2,000 attendees BIG Salsa Festival NY is a great way to reach dancers, athletes, and latin music enthusiast. Be prepared to provide the following information to apply for your vendor booth:</p>
                <ol>
                    <li>Name of your company (please include link to your website, if applicable)</li>
                    <li>Type of sales or service</li>
                    <li>Sales to only female, male or both</li>
                    <li>#of employees including yourself</li>
                </ol>
                <p>Vendor booths come with the following: Rectangular table & table cloth, chair, and outlet.</p>
                <LinkContainer to='./SignUp'>
                    <Button variant="primary" size="lg" className="registerButton">Register</Button>
                </LinkContainer>
                <p>Once form is submitted, we will get back to you in 2-4 weeks to inform you of the status of your vendor application. Please submit payment here to complete your vendor application and reserve your spot at the BIG Salsa Festival NY!</p>
                <Link to='https://paypal.me/BIGsalsaNY?country.x=US&locale.x=en_US'>
                    <Button variant="primary" size="lg" className="registerButton">Submit Payment</Button>
                </Link>
            </div>
        </>
    )
}