import Row from "react-bootstrap/esm/Row";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";


export default function VolunteerForm () {

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
                    <Form.Group className="mb-3 col-md-4" controlId="avaiablity">
                        <Form.Label>Availability</Form.Label>
                        <p>Please fill out all availability we will try our best to accommodate but spots are filled on a first come first served basis.  You must select 2 evening slots.</p>
                        <Form.Check {...register('availability')} type="checkbox" label="Friday before 6pm" value={'FridayBefore6'}/>
                        <Form.Check {...register('availability')} type="checkbox" label="Friday after 6pm" value={'FridayAfter6'}/>
                        <Form.Check {...register('availability')} type="checkbox" label="Saturday before 6pm" value={'FridayBefore6'}/>
                        <Form.Check {...register('availability')} type="checkbox" label="Saturday after 6pm" value={'FridayAfter6'}/>
                        <Form.Check {...register('availability')} type="checkbox" label="Sunday before 6pm" value={'FridayBefore6'}/>
                        <Form.Check {...register('availability')} type="checkbox" label="Sunday after 6pm" value={'FridayAfter6'}/>
                        {errors.City && <span>This field is required</span>}
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="CCAuth">
                        <Form.Label>Please upload CC Auth Form</Form.Label>
                        <Form.Control type="file" {...register("CCAuth", {required: true})} placeholder="CC Auth" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-4" controlId="PhotoID">
                        <Form.Label>Photo ID</Form.Label>
                        <Form.Control type="file" {...register("PhotoID", {required: true})} placeholder="Photo ID" />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}