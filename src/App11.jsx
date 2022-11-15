import { useState, createContext, useContext } from 'react'


const NumContext = createContext()
function Son() {
  const { num, changeNum } = useContext(NumContext)
  return (
    <>
      <h4>子组件 {num}</h4>
      <button onClick={() => changeNum(1)}>修改</button>
    </>
  )
}

const Father = () => {
  return (
    <NumContext.Consumer>
      {
        ({ num }) => (
          <>
            <h1>父组件 {num}</h1>
            <Son />
          </>
        )
      }
    </NumContext.Consumer>
  )
}

export default function App11() {
  const [num, setNum] = useState(1)
  const changeNum = (arg) => {
    setNum(num + arg)
  }
  return (
    <NumContext.Provider value={{ num, changeNum }}>
      <Father />
    </NumContext.Provider>
  )
}
