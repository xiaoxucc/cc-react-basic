import { useState, createContext } from 'react'


const NumContext = createContext()
function Son() {
  return (
    <NumContext.Consumer>
      {
        ({num,changeNum}) => (
          <>
            <h4>子组件 {num}</h4>
            <button onClick={() => changeNum(1)}>修改</button>
          </>
        )
      }
    </NumContext.Consumer>
  )
}

const Father = () => {
  return (
    <NumContext.Consumer>
      {
        ({num}) => (
          <>
            <h1>父组件 {num}</h1>
            <Son />
          </>
        )
      }
    </NumContext.Consumer>
  )
}

export default function App10() {
  const [num, setNum] = useState(1)
  const changeNum = (arg) => {
    setNum(num + arg)
  }
  return (
    <NumContext.Provider value={{num, changeNum}}>
      <Father />
    </NumContext.Provider>
  )
}
