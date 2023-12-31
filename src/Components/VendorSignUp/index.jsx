import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useRef, useState } from "react";
import SpinnerComponent from "../Spinner";
import SweetAlert2 from 'react-sweetalert2';
import emailjs from '@emailjs/browser';


export default function VendorSignUp() {

    const [loading, setLoading] = useState(false);
    const [swalProps, setSwalProps] = useState({});

    let location = useLocation();
    let eventName = useRef(location.pathname.split('/')[1]);
    const date = new Date();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitForm = (data) => {
        setLoading(!loading)
        console.log(data);
        emailjs.sendForm('service_tunzwxx', 'template_kk8btpm', "#vendorForm", 'eE0pJXRPJa9txquj8')
        axios.post("https://sheet.best/api/sheets/d62476f3-97dc-4dde-b7d9-4a7440dd422f/tabs/Vendors", data)
        .then(response => {
            reset();
            setSwalProps({ show: true, title: 'Success'})
            setLoading(false)
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
        {loading ?  <SpinnerComponent />
        :
        <>
        <h1>Vendor Application</h1>
        <p>WAIVER OF LIABILITY.  On behalf of myself and my spouse/partner, children/Minor Members, Other Members, Guests, clients, parents, guardians, heirs, next of kin, personal representatives, heirs and assigns, I hereby voluntarily and forever release and discharge BIG Salsa Festival NY from, covenant and agree not to sue BIG Salsa Festival NY for, and waive, any claims, demands, actions, causes of action, debts, damages, losses, costs, fees, expenses or any other alleged liabilities or obligations of any kind or nature, whether known or unknown (collectively, &quot;Claims&quot;) for any Injuries to me, Minor Member(s), Other Member(s), or Guest(s) in the Use of BIG Salsa Festival NY Premises and Services which arise out of, result from, or are caused by any Ordinary NEGLIGENCE OF BIG Salsa Festival NY, me, any Minor Member(s), any Other Member(s), any Guest(s), and/or any other person.</p>
        <Form id='vendorForm' className='formContainer' onSubmit={handleSubmit(submitForm)}>
            <Row>
            <Form.Group className="mb-3 col-md-4" controlId="ownerFullName">
                <Form.Label>Owner Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" {...register('OwnerFullName', {required: true})} />
                {errors.ownerFullName && <span>This field is required</span>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter company name" {...register('CompanyName', {required: true})} />
                {errors.companyName && <span>This field is required</span>}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="website">
                <Form.Label>Link to Company Website</Form.Label>
                <Form.Control type="text" placeholder="Enter link" {...register('Website')}/>
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="services">
                <Form.Label>My Product/Services</Form.Label>
                <Form.Check {...register('Services')} value={'shoe'} type="checkbox" label="Shoe Vendor" />
                <Form.Check {...register('Services')} value={'clothing'} type="checkbox" label="Clothing Vendor" />
                <Form.Check {...register('Services')} value={'body suits'} type="checkbox" label="Body Suits" />
                <Form.Check {...register('Services')} value={'leggings'} type="checkbox" label="Leggings" />
                <Form.Check {...register('Services')} value={'costumes'} type="checkbox" label="Costumes" />
                <Form.Check {...register('Services')} value={'shirts'} type="checkbox" label="Shirts" />
                <Form.Check {...register('Services')} value={'massage therapy'} type="checkbox" label="Massage Therapist (service)" />
                <Form.Check {...register('Services')} value={'massage therapy product only'} type="checkbox" label="Massage Therapist (products)" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="products">
                <Form.Label>My Products are for</Form.Label>
                <Form.Select aria-label='products' {...register('Products')}>
                    <option value={'male only'}>Male Only</option>
                    <option value={'female only'}>Female Only</option>
                    <option value={'both male and female'}>Both</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 col-md-12'>
                <Form.Label>Number of Employees</Form.Label>
                <Form.Select aria-label='number of employees' {...register('NumberOfEmployees')}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="ownerFullName">
                <Form.Check {...register('Accept', {required: true})} type="checkbox" label="I agree to the terms and conditions" />
                {errors.accept && <span>Please accept the terms of agreement.</span>}
            </Form.Group>
            </Row>
            <input hidden type="text" {...register("Date")} value={date} />
            <input hidden type="text" {...register("Event")} value={eventName.current} />
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        <SweetAlert2 {...swalProps}>
            <h1>Thank you for your submission!</h1>
            <p>We&apos;ll contact you shortly.</p>
        </SweetAlert2>
    </>
        }
        </>
    )
}