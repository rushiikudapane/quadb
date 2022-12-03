import React, { Context, createContext, useState } from 'react'
import { sendData } from '../MoviesAPI/Movies'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import BookingForm from '../BookingForm/BookingForm';
import './summary.css'
import ImgCard from '../ImgCard/ImgCard';
import SummaryContent from '../SummaryContent/SummaryContent';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Summary = (props) => {
    const [check, setCheck] = useState(false);

    const myStyle = {
        backgroundImage: `url(${props.data})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        filter: "blur(15px)",
        backgroundPosition: "center",
    }
    return (
        <div>
            <div style={myStyle}>
            </div>
            <div className="contain">
                <Container>
                    <Row>
                        <Col xs={6} >
                            <div>
                                <Card className="contentCard">
                                    <Card.Body>
                                        <SummaryContent data={props.parentSummary} />
                                        <Link to="/">
                                            <motion.button style={{ backgroundColor: "#0066b2", color: "white", height: "40px", borderRadius: "5px", marginRight: "10px", marginTop: "15px" }} whileTap={{ scale: 0.9 }} whileHover={{ backgroundColor: "#002D62", boxShadow: "1px 1px 1px black", }}>Back</motion.button>
                                        </Link>
                                        <motion.button style={{ backgroundColor: "#0066b2", color: "white", height: "40px", borderRadius: "5px", marginTop: "15px" }} whileHover={{ backgroundColor: "#002D62", boxShadow: "1px 1px 1px black" }} whileTap={{ scale: 0.9 }} onClick={() => setCheck(true)}>Watch Movie</motion.button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div>
                                {check ? <BookingForm formName={props.formName} formTime={props.formTime} data={props.data} setCheck={setCheck} /> : <ImgCard data={props.data} />}

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Summary
