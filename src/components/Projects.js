import React, { Component } from 'react'
import BookImage from '../images/Book.jpeg'
import CycleImage from '../images/Cycle.jpeg'
import FlamingoImage from '../images/Flamingo.jpeg'
import { Container, Row, Col } from 'react-bootstrap'

class Projects extends Component {
    render() {
        return (
                <div className='main-project bg-light'>
                    <Container className='containerProject'>
                        <h1>Projects</h1>
                        {/* Row1 */}
                        <Row className='rowProject'>
                            <Col>
                                <h3>Project Name 01</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. 
                                    It’s easy. Just click “Edit Text” or double click me to add 
                                    your own content and make changes to the font. I’m a great 
                                    place for you to tell a story and let your users know a little 
                                    more about you.
                                </p>
                            </Col>
                            <Col>
                                <img src={BookImage} alt='Photo By Tanya Trukyr' className='project-image'></img>
                            </Col>
                        </Row>

                        {/* Row 2 */}
                        <Row className='rowProject'>
                            <Col>
                                <h3>Project Name 02</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. 
                                    It’s easy. Just click “Edit Text” or double click me to add 
                                    your own content and make changes to the font. I’m a great 
                                    place for you to tell a story and let your users know a little 
                                    more about you.
                                </p>
                            </Col>
                            <Col>
                                <img src={CycleImage} alt='Photo By Ali Bakhtiari' className='project-image'></img>
                            </Col>
                        </Row>

                        {/* Row 3 */}
                        <Row className='rowProject'>
                            <Col>
                                <h3>Project Name 03</h3>
                                <p>I'm a paragraph. Click here to add your own text and edit me. 
                                    It’s easy. Just click “Edit Text” or double click me to add 
                                    your own content and make changes to the font. I’m a great 
                                    place for you to tell a story and let your users know a little 
                                    more about you.
                                </p>
                            </Col>
                            <Col>
                                <img src={FlamingoImage} alt='Photo By Sean Paul Kinnear' className='project-image'></img>
                            </Col>
                        </Row>
                    </Container>
                </div>
        )
    }
}

export default Projects
