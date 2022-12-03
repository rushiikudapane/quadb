import React, { useEffect, useState } from 'react'
import { Card, DropdownButton, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import './BookingForm.css'




const BookingForm = (props) => {

    const storage = window.localStorage;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quantity, setQuantity] = useState('');
    const [day, setDay] = useState();
    const [time, setTime] = useState();

    useEffect(() => {
        if (storage.getItem('name'))
            setName(storage.getItem('name'))

        if (storage.getItem('email'))
            setEmail(storage.getItem('email'))

        if (storage.getItem('quantity'))
            setQuantity(storage.getItem('quantity'))

        if (storage.getItem('day'))
            setDay(storage.getItem('day'))

        if (storage.getItem('time'))
            setTime(storage.getItem('time'))
    })

    useEffect(() => {
        storage.setItem('name', name)
        storage.setItem('email', email)
        storage.setItem('quantity', quantity)
        storage.setItem('day', day)
        storage.setItem('time', time)
    }, [name, email, quantity, day, time])

    const handleClick = (e) => {
        e.preventDefault();
        storage.clear();
        setName('');
        setEmail('');
        setQuantity('');
        setDay('');
        setTime('');
        if (!name) window.alert("Enter Valid Name")
        else if (!email) window.alert("Enter Valid Email")
        else if (!quantity) window.alert("Enter Valid Quantity")
        else if (!day) window.alert("Enter Valid Day")
        else if (!time) window.alert("Enter Valid Time")
        else {
            window.alert("Booking Done Successfully!");
            props.setCheck(false)
        }
    }

    const timeInfo = props.formTime
    console.log(timeInfo)
    return (
        <div style={{ marginLeft: "", marginRight: "", color: 'black' }}>
            <Card className="formCard">
                <Card.Body>
                    <Form>
                        <h2 className='mb-4' style={{
                            fontFamily: "Karla, sans-serif", textShadow: "1px 1px 1px blue"
                        }}>{props.formName}</h2>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} className='mb-3' placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control type="email" value={email} className='mb-3' placeholder="Enter your mailID" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ticket Quantity</Form.Label>
                            <Form.Control type="number" value={quantity} className='mb-3' placeholder="Enter Ticket Quantity" onChange={(e) => setQuantity(e.target.value)} />
                        </Form.Group>
                        <Form.Label>Days Available</Form.Label>
                        <Form.Group>
                            <Form.Select value={day} className="mb-3" onChange={(e) => setDay(e.target.value)}>
                                <option>Select Day</option>
                                {timeInfo.days.map((currEle) => {
                                    return (
                                        <option>{currEle}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Label>Time Slots Available</Form.Label>
                        <Form.Group>
                            <Form.Select value={time} className="mb-3" onChange={(e) => setTime(e.target.value)}>
                                <option>Select Time Slot</option>
                                <option>{timeInfo.time}</option>
                            </Form.Select>
                        </Form.Group>
                        <motion.button style={{ backgroundColor: "#0066b2", color: "white", height: "40px", borderRadius: "5px" }} type="submit" onClick={handleClick} whileHover={{ backgroundColor: "#002D62", boxShadow: "1px 1px 1px black" }} whileTap={{ scale: 0.9 }}>Book Tickets</motion.button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookingForm