import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Profile from '../images/profile.jpeg'

function Home() {
    let history = useHistory()
    return (
        <div className='main-home bg-light'>
                <Container className='containerHome'>
                    <Row>
                        <Col>
                            <img src={Profile} alt='Photo By Sean Paul Kinnear' className='profile-image'></img>
                        </Col>
                        <Col>
                            <h1 id='homehone'>Hello</h1>
                            <h3>A bit about me</h3>
                            <p>I'm a paragraph. Click here to add your own text 
                               and edit me. I’m a great place for you to tell a 
                               story and let your users know a little more about you.
                            </p>
                            <Row id='rowHome'>
                                <Col>
                                    <button onClick={() => history.push('/Resume')} className='main-btn resumeBtn'>Resume</button>
                                </Col>
                                <Col>
                                    <button onClick={() => history.push('/Projects')} className='main-btn projectsBtn'>Projects</button>
                                </Col>
                                <Col>
                                    <button onClick={() => history.push('/Contact')} className='main-btn contactBtn'>Contact</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
    )
}

export default Home
