import { useState } from "react"

const App = () => {

  const [ shouldShowLanding, setSholdShowLanding ] = useState(true)
  
  const [ pageName, setPageName ] = useState("Home");

  return (
    <>
    <h1>Hello World</h1>
    <button onClick={ () => setSholdShowLanding(!shouldShowLanding) }>toggle</button>
    <button onClick={ () => setPageName("Home") }>Home</button>
    <button onClick={ () => setPageName("About") }>About</button>
    <button onClick={ () => setPageName("Landing") }>Contact</button>
    <div>
      {shouldShowLanding ? <div className="landing">landing</div> : <div className="home">Home</div>}
    </div>
    <div>
      {pageName === "Home" && <div>Homepage component</div>}
      {pageName === "About" && <div>About component</div>}
      {pageName === "Landing" && <div>Landing component</div>}
    </div>
    </>
  )
}

export default App
