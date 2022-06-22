import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
export default class Api extends Component {
  render() {
    return (
      <div className='container' 
            style={{
                      backgroundColor:'	rgb(25,25,112)',
                      height:'1000px',
                      width:'100%'
                     }}>
<div className='heading'>
<span>The</span>
<span className='title'>privacy-friendly</span>
<span>URL Shortener</span>
</div>
<div className='content'>
    <div className='content-title'>Link-Shorterner</div>
    <div className='a-link'>
        <p>Enter a link:</p>
        <input type='text' placeHolder='example.com'></input>
        <FontAwesomeIcon icon="fa-solid fa-right" />
    </div>
    <div className='domain'>
      <button>Shrtco.de</button>
      <button>9qr.de</button>
      <button>shiny.link</button>
    </div>
</div>
      </div>
    )
  }
}
