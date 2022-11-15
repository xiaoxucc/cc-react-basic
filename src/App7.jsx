import {useState} from 'react'


export default function App7() {
  const [num, setNum] = useState(0)
  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>累加</button>
    </>
  )
}