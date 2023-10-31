import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from '../../Assets/bigSalsaFestivallogo.webp';

import './styles.scss';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/esm/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useForm } from "react-hook-form";
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';

export default function Footer() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = data => console.log(data);

    return (
        <footer className="footer">
        <Container>
            <Row>
                <div className='col-12 col-md-4 col-lg-4'>
                    <Link to='/'>
                        <Image src={logo} alt='Big Salsa Festival' className='footer__logo' />
                    </Link>
                </div>
                <div className='col-12 col-md-4 col-lg-4 form'>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Form.Group controlId="subscribeEmail">
                            <Form.Control {...register('subscribeEmail')} type="email" placeholder="Subscribe to our newsletter" className='footer__input' />
                        </Form.Group>
                        <Button className='footer__button' type='submit'>Join</Button>
                    </Form>
                </div>
                <div className='col-12 col-md-4 col-lg-4 social'>
                    <div className='social__icons'>
                        <h5>Follow Us</h5>
                        <div className='icons'>
                            <a href='https://www.instagram.com/bigsalsafestival/' target='_blank' rel='noreferrer'>
                                <Instagram size={28}/>
                            </a>
                            <a href='https://www.youtube.com/channel/UC78ushXK0R_GGAg77cTwXlQ' target='_blank' rel='noreferrer'>
                                <Youtube size={28}/>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100065623924076' target='_blank' rel='noreferrer'>
                                <Facebook size={28}/>
                            </a>
                        </div>
                    </div>
                    <div className='siteHomes'>
                        <h5>Our Events</h5>
                        <div className='sites'>
                            <Link to='/SanDiego'>Big San Diego</Link>
                            <Link to='/NewYork'>Big New York</Link>
                            <Link to='/Houston'>Big Houston</Link>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        </footer>
    );
}