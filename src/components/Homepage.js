import Slideshow from "./Slideshow"
import Divider from '@mui/material/Divider';

const Homepage = () => {


  return (
    <div className="home">
      <div className="home-1">
      <Slideshow />
      </div>
        <br/>
        <Divider> <h2>Welcome</h2></Divider>
        <br/>
      <div className="welcome-box">
       
      </div>
    </div>
  )
}

export default Homepage