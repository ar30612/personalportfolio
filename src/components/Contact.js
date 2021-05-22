import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {
    const [toSend, setToSend] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
      });
    
    const handleSubmit = () => {
        //e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */}
        send(
                'service_3jryg9l', /*service id */
                'template_24e8rlb', /*template id */
                 toSend,
                'user_AxhyoYq5TSsCoUmQH3208' /* userid */
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
        alert('Thanks for contacting. I will get back to you.');
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    return (
        <div className='main-contact bg-light'>
            <Container className='containerContact'>
                <Row className='rowContact'>
                {/* 1st Column with details */}
                <Col lg='6'>
                    <Row>
                        <h1>Contact</h1>
                        <p>Looking forward to hearing from you</p>
                    </Row>
                    <Row>
                        <h3>Phone</h3>
                        <p>123-456-7890</p>
                    </Row>
                    <Row>
                        <h3>Email</h3>
                        <p>info@mysite.com</p>
                    </Row>
                </Col>
                {/* 2nd Column with Form */}
                <Col lg='6'>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <h4>First Name</h4>
                            <input type='text'
                                   name='firstname'
                                   value={toSend.firstname}
                                   onChange={handleChange}
                                   className='inputC'>
                            </input>
                        </Col>
                        <Col>
                            <h4>Last Name</h4>
                            <input type='text'
                                   name='lastname'
                                   value={toSend.lastname}
                                   onChange={handleChange}
                                   className='inputC'>
                            </input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Email</h4>
                            <input type='text'
                                   name='email'
                                   value={toSend.email}
                                   onChange={handleChange}
                                   className='inputC'>
                            </input>
                        </Col>
                        <Col>
                            <h4>Subject</h4>
                            <input type='text'
                                   name='subject'
                                   value={toSend.subject}
                                   placeholder='Your Subject'
                                   onChange={handleChange}
                                   className='inputC'>
                            </input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Message</h4>
                            <textarea
                                   name='message'
                                   value={toSend.message}
                                   onChange={handleChange}
                                   placeholder='Your Message'
                                   className='textC'>
                            </textarea>
                        </Col>
                        <Col>
                            <button className='main-btn submitBtn' type='submit'>
                                <h3>Submit</h3>
                            </button>
                        </Col>
                    </Row>
                </form>
                </Col>
                
                </Row>
            </Container>
        </div>
    )
}
export default Contact
