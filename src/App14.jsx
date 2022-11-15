import React from 'react'
// import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function App14() {
  // const location = useLocation()
  // console.log(location);
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/home', {
      state: {
        username: '张三'
      }
    })
  }
  const goError = () => {
    navigate('/404')
  }
  return (
    <div>
      <h3>首页面</h3>
      <ul>
        <li><Link to='/home'>主页</Link></li>
        <li><Link to='/list/123'>列表页</Link></li>
        <li><Link to='/detail?id=456&id=cc'>详情页</Link></li>
      </ul>
      <button onClick={goHome}>跳转主页</button>
      <button onClick={goError}>跳转404</button>
      <Outlet />
    </div>
  )
}
