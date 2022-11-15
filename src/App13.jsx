import React from 'react'
import { connect } from "react-redux";


function App13(props) {
  return (
    <div>
      <h2>state num is {props.num}</h2>
      <button onClick={() => props.increment()}>累加</button>
    </div>
  )
}

const mapStateProps = (state) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment() {
      const action = { type: 'addNum', value: 2 }
      dispatch(action)
    }
  }
}


export default connect(mapStateProps, mapDispatchToProps)(App13)