//Sam Goldberg
// 11/9/26
// Week 3 Assignment - React Component


// Bring in the image component from the Components folder
import './App.css'
import Image from './components/Image'

// Build the website using the image component I made
function App() {
  return (
    <>
      <div id="pictureBox">
        {/* // Older cartoons Image component */}
        <div id="OlderToons">
          <h1>Older Cartoons</h1>
          <div>
            <Image text={"Goofy"} img_file={"Goofy_Duckipedia.png"} width="200px" height="200px" alt="Picture of Goofy" />
          </div>
          <div>
            <Image text={"Pink Panther"} img_file={"Pink_Panther.png"} width="200px" height="200px" alt="Picture of Pink Panther" />
          </div>
        </div>
        <div id="ModernToons">
          {/* // Modern cartoons Image component */}
          <h1>Modern Cartoons</h1>
            <div>
            <Image text={"Pikachu"} img_file={"Pikachu.png"} width="200px" height="200px" alt="Picture of Pikachu" />
          </div>
          <div>
            <Image text={"Dexter"} img_file={"Dexter.png"} width="200px" height="200px" alt="Picture of Dexter" />
          </div>
          <div>
            <Image text={"Lagoona Blue"} img_file={"Lagoona_Blue.png"} width="200px" height="200px" alt="Picture of Lagoona Blue" />
          </div>
          <div>
            <Image text={"Juniper Lee"} img_file={"Juniper_Lee.png"} width="200px" height="200px" alt="Picture of Juniper Lee" />
          </div>
        </div>
      </div>
    </>

  )

}
// OUTPUT: There should be two image components. One with four images and one with two images. 
export default App