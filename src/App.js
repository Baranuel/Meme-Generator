import './App.css';
import React, {useState, useEffect} from 'react'
import Meme from './components/Meme'

function App() {

  const [dog, setDog] = useState([])

  const [text, setText] = useState({

    topText: "",
    bottomText: ""
  })

  const getData = () => { fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {

    setDog(data)
  })
}

useEffect( () => {
getData()
},[])

const handleInput = (e) => {
  const {name, value} = e.target
  setText(prevText => ({
    ...prevText,
      [name] : value
  }))
}

console.log(text)

  return (
    <div className="App" > 
    <Meme
    data = {dog}
    inputs = {text}
    />
      <form action="">

        <input
        onChange={ handleInput }
        className="input"
        type="text"
        name="topText"
        placeholder="text on top"
        value={text.topText}
        />

        <input
        onChange={ handleInput }
        className="input"
        type="text"
        name="bottomText"
        placeholder="text on bottom"
        value={text.bottomText}
        />
      </form>
    <button onClick={ getData }className="change-picture">Change Picture</button>
    </div>
  );
}

export default App;
