import { useState } from "react"

// variables
let myName = "Bálint"
let myNumber = 5
let myBoolean = true

let myArray = [ 1, 2, 3, "bela", true, false, "kazmer" ]

let myUd = undefined
let myNull = null

let person = { name: "bela", age: 20 }

// loops in js
let people = [
  { name: "Béla", age: 20 },
  { name: "Lajos", age: 2 },
  { name: "Kázmér", age: 120 },
  { name: "Ottó", age: 25 },
]
// conditional rendering
// operators


let wcounter = 1
const update = () => {
  console.log(wcounter)
  wcounter++
  console.log(wcounter)
}


const App = () => {
  
  const [ isShown, setIsShown ] = useState(false)

  const myToggleFunction = () => {
    setIsShown(!isShown)
  }

  const [counter, setCounter] = useState(1)

  const myIncrementFunction = () => {
    console.log(counter)
    setCounter(counter+1)
    console.log(counter)
    console.log("-------")
  }

  const [ myArr, setArr ] = useState([])

  return (
    <div>

      { isShown ? <p>Hidden content is shown!!!!</p> : <p>Secret content is hidden!</p> }
      <button onClick={myToggleFunction}>Toggle</button>

      <p>Counter value: {counter}</p>
      <button onClick={myIncrementFunction}>Increment</button>

      <p>Counter value: {wcounter}</p>
      <button onClick={update}>Wrong Increment</button>

      <button onClick={() => setArr([ ...myArr, "Béla" ])}>Add béla</button>
      { myArr.map(elem => <p>{ elem }</p>)}

      <h1>
      Hello world
      </h1>
      <p>{ myName }</p>
      <p>{ myNumber * 3 }</p>
      <p>{ myBoolean }</p>
      <p>{ myArray }</p>
      <p>{ myUd }</p>
      <p>{ myNull }</p>
      <p>Név: { person.name }, ({ person.age })</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input placeholder="akarmi" type="password" />

      {
        people.map(p => (
          <div className="card" key={p.name}>
            <p className="card-content">{ p.age < 18 ? "*****" : p.name }</p>
            <p>Some other content</p>
          </div>
          )
        )
      }
    </div>
  )
}

export default App
