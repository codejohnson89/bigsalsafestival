import { LinkContainer } from 'react-router-bootstrap'
import './styles.scss'

export default function VolunteerContent() {
    return (
        <>
            <div className="volunteerContainer">
                <p> Thank you for your interest and volunteering at The B.I.G. Salsa Festival, we are happy to have you. There is a lot of work behind the scenes that make this event come together and it takes the help from people like you to make it it work!</p>
                <p>To be a volunteer you must complete 16 hours throughout the weekend to grant you the Full Pass to BIG SD at no cost. Our goal is to receive your help and support for a few hours throughout the event and allow you plenty of time to enjoy the event as well.</p>
                <p>Please keep in mind that volunteers are needed anytime between 9AM and 4AM. We try our best to schedule everyone as fairly as possible. To be fair all volunteers must be able to volunteer in the late hours at least once, if not twice throughout the weekend.</p>
                <p>Volunteer positions will be granted to traveling applicants first, then we will accept applicants based on a first come first served bases.</p>
                <p>To ensure that all volunteers complete their volunteer hours we must have a credit card on file. By signing this form you give permission to debit your account ONLY in the event that you DO NOT COMPLETE your volunteer hours.</p>
                <p>Please follow to steps below to complete your Volunteer Registration:</p>
                <ol>
                    <li>Please download and fill the <a href='#'>CC Authorization Form</a></li>
                    <li>Complete the B.I.G. Salsa Festival Volunteer Application and Agreement (button below) and upload CCAuth form and photo ID:</li>
                    <li>Once form is submitted, we will get back to you in 2-4 weeks to inform you of the status of your volunteer application. You will receive your schedule the week of the event and placed in a group chat with all volunteers, here you will be able to communicate or get any shifts swaped should anybody be available.</li>
                </ol>
                <p>Please contact us should you have any questions or concerns info.bigsd@gmail.com</p>
                <LinkContainer to='./SignUp'>
                    <button className="btn btn-primary">Volunteer Application</button>
                </LinkContainer>
            </div>
        </>
    )
}