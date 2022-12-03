import React from 'react'
import { Card } from 'react-bootstrap'
import "./ImgCard.css"

const ImgCard = (props) => {
    return (
        <div>
            <Card className='imgCard'>
                <Card.Img variant="top" src={props.data} />
            </Card>
        </div>
    )
}

export default ImgCard