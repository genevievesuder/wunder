import { useState } from 'react'


const Gallery = () => {
const [isRed, setIsred] = useState(false)

const changeColor = () => {
  setIsred(currentState => !currentState)
}


  return (
    <div className="gallery">
      { isRed ? (
      <h1 onClick={changeColor}>Click me!</h1>
      ) : (
      <h1 className='red' onClick={changeColor}>Click me!</h1>
      )}
    </div>
  )
}

export default Gallery

//Boxes w images when clicked, enlarge//