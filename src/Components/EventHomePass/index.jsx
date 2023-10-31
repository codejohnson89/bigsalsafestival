import Accordion from 'react-bootstrap/Accordion';
import './styles.scss';

export default function EventHomePass() {
  return (
    <div className='passContainer'>
        <h2>What Pass is right for you?</h2>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>NIGHT PASS</Accordion.Header>
            <Accordion.Body>
                Want to attend ONE NIGHT only? Includes entry for shows & Social for one night only.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>ALL EVENINGS PASS</Accordion.Header>
            <Accordion.Body>
                If you want to attend Friday- Sunday ( NIGHTS ONLY)  This is the pass for you! This pass includes shows and dance parties.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>ALL DAY PASS</Accordion.Header>
            <Accordion.Body>
            Want to attend  for one full day only?  This pass includes workshops, shows and dance parties for a single day. 
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>FULL PASS</Accordion.Header>
            <Accordion.Body>
            If you want the real BIG Experience, then this is the pass for you!  This pass includes ALL day  & night access Friday-Sunday. Workshops, shows, and dance parties are included!
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>VIP</Accordion.Header>
            <Accordion.Body>
            Add VIP for front row access to shows! This is an add on to any Pass that grants you access to the event. VIP Passes do NOT stand alone.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        <p>Passes purchased are assigned to an individual and can only be transferred upon payment of the transfer fee. All sales are final. No refunds. Prices go up soon! View the purchase timeline below.</p>
        <p>You MUST have your valid ID present to pick up your pass.</p>
    </div>
  );
}
