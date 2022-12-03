import React, { useState, useEffect, createContext } from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import "./Movies.css"
import { motion } from 'framer-motion';

const sendData = createContext();

const Movies = ({ setParentBackground, setParentSummary, setFormDataName, setFormDataTime }) => {
    const [currData, setCurrData] = useState();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        setMovie(await response.json());
        console.log(movie);
    }
    const [check, setCheck] = useState(false);


    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            <Title />
            <Container md>
                <Row>
                    {movie.map((currEle) => {
                        return (
                            <Col xs="12" lg="4" md="6">
                                <motion.div whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.3 },
                                }}>
                                    <Card className='cardHover' style={{ width: "280px", marginTop: "40px", marginLeft: "30px", boxShadow: "10px 10px 20px black" }}>
                                        <Card.Img variant="top" src={currEle.show.image.medium} />
                                        <Card.Body>
                                            <Card.Title>{currEle.show.name}</Card.Title>
                                            <Card.Text>Rating: {currEle.show.rating.average ? currEle.show.rating.average : "NA"}</Card.Text>
                                            <Link to="/summary">
                                                <motion.button style={{ backgroundColor: "#0066b2", color: "white", height: "35px", borderRadius: "5px" }} whileHover={{ backgroundColor: "#002D62", boxShadow: "1px 1px 1px black" }} onClick={() => {
                                                    setCurrData(currEle.show.name);
                                                    setParentBackground(currEle.show.image.original)
                                                    setParentSummary(currEle.show.summary)
                                                    setFormDataName(currEle.show.name)
                                                    setFormDataTime(currEle.show.schedule)

                                                    // setParentBackground(currEle.show.image.summary)

                                                    // setParentSummary(currEle.show.image.summary)
                                                    // console.log(currEle.show.name)
                                                    setCheck(true)
                                                }}
                                                >
                                                    View Summary
                                                </motion.button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    )
}


export default Movies;
export { sendData }