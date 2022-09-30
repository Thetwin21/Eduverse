import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

const colors = {
    orange: "#FFBA5A",
    grey: "A9A9A9"
}

const Stars = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
// star onclick
    const onClickHandle = value => {
        setCurrentValue(value);
    }
    // onmouseover
    const onMouseOver = value => {
        setHoverValue(value)
    }
    // onMouseLeave
    const onMouseLeave = () => {
        setHoverValue(undefined)
    }
    // stars array
    const stars = Array(5).fill(0)
  return (
    <div>
        {stars.map((_,index)=>(
            <FaStar key={index}
            style={{
                fontSize: "15",
                marginLeft: "1px",
                cursor:"pointer"
            }}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey }
            onClick={()=> onClickHandle(index + 1)}
            onMouseOver={() => onMouseOver(index + 1)}
            onMouseLeave={()=> onMouseLeave}
            />
        ))}
    </div>
  )
}

export default Stars;