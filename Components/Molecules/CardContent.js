import React from 'react'
import PropTypes from 'prop-types'
import Label from '../Atoms/Label'

function CardContent(props) {
    const {
        label1,
        label2
       } = props;
    return (
        <div>
              <div >
                 <h3> <Label text={label1} /> </h3>
                  <Label text={label2} />
               </div>
        </div>
    )
}

CardContent.propTypes = {
    label1: PropTypes.string.isRequired,
    label2: PropTypes.number.isRequired
}

export default CardContent