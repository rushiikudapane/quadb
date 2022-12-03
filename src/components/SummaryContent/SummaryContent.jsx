import React from 'react'
import { Card } from 'react-bootstrap'


const SummaryContent = (props) => {
    return (
        <div className="font">
            <h4 style={{ color: "white", textShadow: "2px 2px 3px black, -1px -1px 3px black", }}>
                {props.data}
            </h4>
        </div>
    )
}

export default SummaryContent