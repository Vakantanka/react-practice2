import { useState } from "react"
import "./App.css";

const App = () => {

  // const [ shouldShowLanding, setSholdShowLanding ] = useState(true)
  
  const [ pageName, setPageName ] = useState("Home");
  const [ inputValue, setInputValue ] = useState("");

  const setHistory = (url) => { window.history.pushState({}, '', url) }
  setHistory(pageName);

  // console.log("render");
  console.log(inputValue);

  const instrumentList = [
    {
      id: 1,
      name: "Epiphone Les Paul Custom",
      strings: 6,
      color: "cherry sunburst"
    },
    {
      id: 2,
      name: "Line6 Variax 700",
      strings: 6,
      color: "black"
    },
    {
      id: 3,
      name: "Cort PJ",
      strings: 4,
      color: "grey"
    },
    {
      id: 4,
      name: "Epiphone by Gibson S-500",
      strings: 6,
      color: "translucent red"
    },
    {
      id: 5,
      name: "Jó vóna még egy",
      strings: 6,
      color: "hupilila"
    },
  ];
  return (
    <>
    <h1>Hello World</h1>
    {/* <button onClick={ () => setSholdShowLanding(!shouldShowLanding) }>toggle</button> */}
    <nav>
      <button onClick={ () => setPageName("Home") }>Home</button>
      <button onClick={ () => setPageName("About") }>About</button>
      <button onClick={ () => setPageName("Landing") }>Contact</button>
    </nav>
    {/* <div>
      {shouldShowLanding ? <div className="landing">landing</div> : <div className="home">Home</div>}
    </div> */}
    <div>
      {pageName === "Home" && <div>Homepage component</div>}
      {pageName === "About" && <div>About component</div>}
      {pageName === "Landing" && <div>Landing component</div>}
    </div>
    <input type="text" defaultValue={inputValue} onChange={ (e) => setInputValue(e.target.value) } />
    <button disabled={inputValue.length < 3}>Submit</button>
    { inputValue.length < 3 && <div>Min. 3 karakter</div>}
    { instrumentList.map((instrument, index) => {
      let visible = instrument.name.startsWith(inputValue) ? "visible" : "hidden";
      return (
        <li key={index} className={visible}>
          <div>ID ({instrument.id})</div>
          <div>Name: {instrument.name}</div>
          <div>Strings: {instrument.strings}</div>
          <div>Color: {instrument.color}</div>
        </li>
      )
    }) }
    </>
  )
}

export default App
