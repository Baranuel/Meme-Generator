import React, {useState} from 'react'
import '../index.css'

function Meme({data, inputs}) {

    console.log(data, inputs)
    


  return (
    <div className="meme">
        <h1 className="meme-text text-top">{ inputs.topText.toUpperCase() }</h1>
        <img className="image" src={data.message} alt={data.status} />
        <h1 className="meme-text text-bottom"> { inputs.bottomText.toUpperCase() }</h1>
    </div>
  )
}

export default Meme