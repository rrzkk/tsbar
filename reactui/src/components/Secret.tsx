import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    text: string
}
const Secret: React.FC<Props> = ({ text }) => {
    return (
        <div>
            <h1>The secret</h1>
            <div>{text}</div>
        </div>
    );
}

export {Secret}