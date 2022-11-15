import {useState} from 'react'


// 函数式组件
export default function App6() {
  // Hook只能在组件函数的顶部使用
  const [msg, setMsg] = useState('hello World')
  return (
    <>
      <h2>{msg}</h2>
      <button onClick={() => setMsg('你好世界')}>clickME</button>
    </>
  )
}

// const App5 = () => {
//   return (
//     <h2>hello function Component 箭头</h2>
//   )
// }
// export default App5