import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class Resume extends Component {
    render() {
        return (
            <div className='main-resume bg-light'>
                <Container className='containerResume'>
                    <h1>Resume</h1>
                    {/* Row 1 */}
                    <Row className='rowResume'>
                        <Col  md lg='5'><h3>Work Experience</h3></Col>
                        <Col>
                            <Row>
                                <Col  md lg='3'><h5>2020-Present</h5></Col>
                                <Col>
                                    <h3>Editor</h3>
                                    <p>I'm a paragraph. Click here to add your own text 
                                        and edit me. It’s easy. Just click “Edit Text” 
                                        or double click me to add your own content and 
                                        make changes to the font.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md lg='3'><h5>2018-2020</h5></Col>
                                <Col>
                                    <h3>Writer at large</h3>
                                    <p>I'm a paragraph. Click here to add your own text 
                                        and edit me. It’s easy. Just click “Edit Text” 
                                        or double click me to add your own content and 
                                        make changes to the font.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md lg='3'><h5>2017-2018</h5></Col>
                                <Col>
                                    <h3>Intern</h3>
                                    <p>I'm a paragraph. Click here to add your own text 
                                        and edit me. It’s easy. Just click “Edit Text” 
                                        or double click me to add your own content and 
                                        make changes to the font.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <hr></hr>
                    {/* Row 2*/}
                    <Row>
                        <Col  md lg='5'><h3>Education</h3></Col>
                        <Col>
                            <Row>
                                <Col  md lg='3'><h5>2015-2017</h5></Col>
                                <Col>
                                    <h3>Establishment Name | Master's Degree</h3>
                                    <p>I'm a paragraph. Click here to add your own text 
                                        and edit me. Let yourusers get to know you.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col  md lg='3'><h5>2012-2015</h5></Col>
                                <Col>
                                    <h3>Establishment Name | Bachelor's Degree</h3>
                                    <p>I'm a paragraph. Click here to add your own text 
                                        and edit me. Let yourusers get to know you.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr></hr>

                    {/* Row 3 */}
                    <Row>
                        <Col  md lg='5'><h3>Skills & Expertise</h3></Col>
                        <Col>
                            <ul className='listResume'>
                                <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                                <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
    }
}

export default Resume
