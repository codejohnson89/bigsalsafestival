import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import { useForm } from "react-hook-form";


export default function VendorSignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = data => console.log(data);
    return (
        <>
            <h1>Vendor Application</h1>
            <p>WAIVER OF LIABILITY.  On behalf of myself and my spouse/partner, children/Minor Members, Other Members, Guests, clients, parents, guardians, heirs, next of kin, personal representatives, heirs and assigns, I hereby voluntarily and forever release and discharge BIG Salsa Festival NY from, covenant and agree not to sue BIG Salsa Festival NY for, and waive, any claims, demands, actions, causes of action, debts, damages, losses, costs, fees, expenses or any other alleged liabilities or obligations of any kind or nature, whether known or unknown (collectively, "Claims") for any Injuries to me, Minor Member(s), Other Member(s), or Guest(s) in the Use of BIG Salsa Festival NY Premises and Services which arise out of, result from, or are caused by any Ordinary NEGLIGENCE OF BIG Salsa Festival NY, me, any Minor Member(s), any Other Member(s), any Guest(s), and/or any other person.</p>
            <Form className='formContainer' onSubmit={handleSubmit(submitForm)}>
                <Row>
                <Form.Group className="mb-3 col-md-4" controlId="ownerFullName">
                    <Form.Label>Owner Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" {...register('ownerFullName', {required: true})} />
                    {errors.ownerFullName && <span>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3 col-md-4" controlId="companyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter company name" {...register('companyName', {required: true})} />
                    {errors.companyName && <span>This field is required</span>}
                </Form.Group>
                <Form.Group className="mb-3 col-md-4" controlId="website">
                    <Form.Label>Link to Company Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter link" {...register('website')}/>
                </Form.Group>
                <Form.Group className="mb-3 col-md-4" controlId="services">
                    <Form.Label>My Product/Services</Form.Label>
                    <Form.Check {...register('services')} value={'shoe'} type="checkbox" label="Shoe Vendor" />
                    <Form.Check {...register('services')} value={'clothing'} type="checkbox" label="Clothing Vendor" />
                    <Form.Check {...register('services')} value={'body suits'} type="checkbox" label="Body Suits" />
                    <Form.Check {...register('services')} value={'leggings'} type="checkbox" label="Leggings" />
                    <Form.Check {...register('services')} value={'costumes'} type="checkbox" label="Costumes" />
                    <Form.Check {...register('services')} value={'shirts'} type="checkbox" label="Shirts" />
                    <Form.Check {...register('services')} value={'massage therapy'} type="checkbox" label="Massage Therapist (service)" />
                    <Form.Check {...register('services')} value={'massage therapy product only'} type="checkbox" label="Massage Therapist (products)" />
                </Form.Group>
                <Form.Group className="mb-3 col-md-4" controlId="products">
                    <Form.Label>My Products are for</Form.Label>
                    <Form.Select aria-label='products' {...register('products')}>
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
                    <Form.Check {...register('accept', {required: true})} type="checkbox" label="I agree to the terms and conditions" />
                    {errors.accept && <span>Please accept the terms of agreement.</span>}
                </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </>
    )
}