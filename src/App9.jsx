import {useState} from 'react'

function Son(props) {
  return (
    <>
      <h4>子组件 {props.num}</h4>
      <button onClick={() => props.changeNum(2)}>累加</button>
    </>
  )
}

function Father(props) {
  return (
    <>
      <h1>父组件 {props.num}</h1>
      <Son num={props.num} changeNum={props.changeNum} />
    </>
  )
}

export default function App9() {
  const [num, setNum] = useState(1)
  const changeNum = (arg) => {
    console.log(arg)
    setNum(num + arg)
  }
  return <Father num={num} changeNum={changeNum} />
}
