import React from 'react'
import style from './components.module.css'

const button = ({text, setFlagCreate}) => {

  const handleClick = () => {
    if (setFlagCreate) {
      setFlagCreate(true);
    }
  }

    return (
      <button className={style.buttonWrap} 
      onClick={handleClick}
      >
        {text}
      </button>
    )
  }
  
  export default button
