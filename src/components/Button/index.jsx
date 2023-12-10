import React from 'react'
import './style.scss';

export default function Button(props) {
    const stylesButton = {
      backgroundColor: props.color,
      color: '#faecee',
      padding: "5px 10px",
      borderRadius: "10px",
    };
  
    return (
      <button className="button" style={stylesButton} onClick={props.onTouchButton}>
        {props.children}
      </button>
    );
  }
