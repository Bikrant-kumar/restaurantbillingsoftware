import React from 'react'

function Label(props) {
    const {
        text
       } = props;
    return (
        <div>
            {text}
        </div>
    )
}

export default Label