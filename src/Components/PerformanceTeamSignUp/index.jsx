import Row from "react-bootstrap/esm/Row";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import './styles.scss';
import Button from "react-bootstrap/esm/Button";

export default function PerformanceTeamSignUp () {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = data => console.log(data);


    return (
        <>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Row>
                    <Form.Group className="mb-3 col-md-4" controlId="formFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" {...register("FullName", {required: true})} placeholder="Enter Full Name" />
                        {errors.FullName && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" {...register("Email", {required: true})} placeholder="Enter Email" />
                        {errors.Email && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4 " controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" {...register("Phone", {required: true})} placeholder="Enter Phone Number" />
                        {errors.Phone && <span>This field is required</span>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3 col-md-4" controlId="formDanceCompanyName">
                        <Form.Label>Dance Company Name</Form.Label>
                        <Form.Control type="text" {...register("DanceCompany")} placeholder="Enter Dance Company Name" />
                        {errors.DanceCompany && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formTeamName">
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control type="text" {...register("TeamName", {required: true})} placeholder="Enter Team Name" />
                        {errors.TeamName && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" {...register("City", {required: true})} placeholder="City" />
                        {errors.City && <span>This field is required</span>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3 col-md-4" controlId="formState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" {...register("State", {required: true})} placeholder="State" />
                        {errors.State && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formGenreSong">
                        <Form.Label>Genre & Song Name</Form.Label>
                        <Form.Control type="text" {...register("SongName", {required: true})} placeholder="Enter Song Name" />
                        {errors.SongName && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formSongLength">
                        <Form.Label>Song Length(must be under 3 minutes)</Form.Label>
                        <Form.Control type="text" {...register("SongLength", {required: true})} placeholder="Enter Song Length" />
                        {errors.SongLength && <span>This field is required</span>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3 col-md-4" controlId="formNumberOfPerformers">
                        <Form.Label>Number of Performers</Form.Label>
                        <Form.Control type="numer" {...register("NumberOfPerformers", {required: true})} placeholder="Enter Number of Performers" />
                        {errors.NumberOfPerformers && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-8" controlId="formComments">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control type="text" {...register("Comments")} placeholder="Additional Comments" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="formTOS">
                        <Form.Label>Accept Terms of Service</Form.Label>
                        <Form.Check type="checkbox" {...register("TOS", {required: true})} placeholder="Enter Email" />
                        {errors.TOS && <span>This field is required</span>}
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}