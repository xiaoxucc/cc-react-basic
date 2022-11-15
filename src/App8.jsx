import {useState, useEffect} from 'react'

export default function App8() {
  const [num, setNum] = useState(1)
  const [num2, setNum2] = useState(1)
  // useEffect(() => {
  //   console.log('mounted'); //这里写数据请求
  // })
  // 检测数据更新重新渲染
  // useEffect(() => {
  //   console.log('num更新了');
  // }, [num])

  // 销毁
  useEffect(() => {
    return () => {
      console.log('销毁');
    }
  })
  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>累加</button>

      <h1>{num2}</h1>
      <button onClick={() => setNum2(num2 + 1)}>累加</button>
    </>
  )
}
