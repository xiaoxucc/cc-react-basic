import React, { Component } from 'react'


export default class App3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
    this.addNum = this.addNum.bind(this)
  }
  // state = {
  //   num: 0
  // }
  render() {
    return (
      <div>
        <h2>数字是: {this.state.num}</h2>
        <button onClick={() => this.setState({num: this.state.num + 1})}>按钮1-累加</button>
        <button onClick={this.addNum.bind(this)}>按钮2-累加</button>
        <button onClick={this.addNum}>按钮2变态写法-累加</button>
        <button onClick={() => this.addNum()}>按钮3-累加</button>
      </div>
    )
  }
  addNum() {
    this.setState({
      num: this.state.num + 1
    })
  }
}


// class Person {
//   constructor(name) {
//     this.name = name
//   }
//   sayName() {
//     console.log(this.name);
//   }
// }

// let p = new Person('张三')
// p.sayName()