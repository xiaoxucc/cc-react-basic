import {useState, useRef} from 'react'

export default function App12() {
  const [val, setVal] = useState('')
  const element = useRef(null)
  return (
    <div>
      <h3>受控组件</h3>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => console.log(val)}>获取input的值</button>
      <h3>不受控组件</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>获取input的值</button>
    </div>
  )
}
