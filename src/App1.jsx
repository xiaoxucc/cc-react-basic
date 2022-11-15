import React from "react";

let msg = '你好App1'
let colorShow = true
let myStyle = {backgroundColor: colorShow ? 'skyblue' : 'pink'}
let arr = ['刘备', '关羽', '张飞']


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>this is App1 {msg}</h1>
        <label htmlFor="username">{msg}</label>
        <input type="text" id="username" />
        <div className="box">盒子</div>
        <div style={myStyle}>盒子2</div>
        <ul>
          {
            arr.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}