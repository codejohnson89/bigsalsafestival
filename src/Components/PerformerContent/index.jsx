import Button from "react-bootstrap/esm/Button";
import { LinkContainer } from "react-router-bootstrap";
import './styles.scss';
import PassGroupCards from '../PassGroupCards';
import Proptypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function PerformerContent(props) {
    return (
        <>
            <div className="performContainer">
                <h3>TERMS OF SERVICE</h3>
                <p>As the director I will share the information below to my students and perspective attendees. All attendees registered through me are aware of the following terms and conditions upon registering and attending BIG Salsa Festival.</p>
                <ol>
                    <li>
                        <h4>REGISTER TO PERFORM HERE</h4>
                        <ul>
                            <li>Every person on your team must be performing.  If they are not performing, they can NOT purchase a performer’s pass. All Performers must purchase a Performer Pass.</li>
                            <li>The team’s Primary Contact will submit ONE (1) Performers Application for the entire team.</li>
                            <li>Please only send ONE request per team.  Duplicates can cause delays.</li>
                            <li>If you are registering more than one team, please register each team individually.</li>
                            <li>Passes are NOT transferable, passes are assigned to an individual. Please ensure you have full name of the dancer you are registering. (Transfer fees apply should you request a transfer)</li>
                            <li>If you have dancers performing on different teams, only one payment is required for that dancer.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>APPROVAL PROCESS</h4>
                        <ul>
                            <li>All teams must be approved to perform.</li>
                            <li>All approved teams will be notified as soon as possible, usually within 2 weeks from this submission.</li>
                            <li>Upon approval, the Registration Team will send an acceptance email with a special payment link to the Primary Contact to complete registration and can make FULL Payment or he/she can give link to each member on the team for them to complete registration and make payment individually.</li>
                            <li>If you do NOT receive a payment link from Registration within 2 weeks, please do NOT fill out another application. Contact 832-503-9229 directly.</li>
                        </ul>
                        <p>Each approved team will be guaranteed one performance at the BIG Salsa Festival. Directors having multiple teams can sign up each of their teams, but must not have all the same members on stage. Teams must be available to perform on any of the given days Thursday-Sunday Night. If you have several performances, please contact us with details prior to filling out another application.</p>
                    </li>
                    <li>
                        <h4>COMPLETING REGISTRATION &amp; MAKING PAYMENT</h4>
                        <ul>
                            <li>Registration will send approved teams a payment link.</li>
                            <li>Performers fee will be based on the time he/she completed payment with the link given and not the date their team was approved. Please follow Performers Pass Purchase Timeline below.</li>
                        </ul>
                        <p>There is a ONE-PASS-PER-PERSON policy.  All Sales are Final.  No Refunds.</p>
                    </li>
                    <li>
                        <h4>CONFIRMATION & YOUR TICKETS</h4>
                        <ul>
                            <li>Once payment is received, the applicant will be emailed ticketing information.</li>
                            <li>Please bring valid photo identification to registration on the day of the event. A valid PHOTO ID is needed, No exceptions.</li>
                            <li>Performers can pick up their passes when registration opens.</li>
                            <li>Everyone attending the event MUST wear their pass wristband at all times during the event.</li>
                            <li>Tampering with wristbands may result in removal from event. No re-entry, with no refund.</li>
                        </ul>
                    </li>
                </ol>
                <h3>PARENTS & KIDS 12 AND UNDER</h3>
                <p>Kids must be under the age of 12 to purchase the kids performance pass. Kids must be present at registration to pick up their performer pass. PARENTS must purchase FULL PASS if they wish to accompany their children during workshops and/or tech rehearsal. It is the INSTRUCTORS RESPONSIBILITY to watch over kids during tech rehearsal. We strongly suggest instructors with large kid teams to encourage parents who want to partake in the full experience with their kids to purchase a full pass. Tech rehearsal and workshops are only available for performers and full pass purchasers, NO EXCEPTIONS.</p>
                <h3>PERFORMERS PASS PURCHASE TIMELINE</h3>
                <PassGroupCards data={props.kidPrices} />
                <h3>ADULT PERFORMERS PASS PURCHASE TIMELINE</h3>
                <PassGroupCards data={props.adultPrices} />
                <p>By completing the team registration you agree and acknowledge the above.</p>
                <p>***ONLY REGISTER ONCE PER TEAM****</p>
                <p>If you do not hear back from us within a week please feel free to email us, but please DO NOT register again. Thank you.</p>
                <LinkContainer to={props.registerLink}>
                    <Button variant="primary" size="lg" className="registerButton">Register</Button>
                </LinkContainer>
            </div>
        </>
    )
}

PerformerContent.propTypes = {
    kidPrices: Proptypes.array,
    adultPrices: Proptypes.array,
    registerLink: Proptypes.string
}