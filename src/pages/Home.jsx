import React from 'react'
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation()
  return (
    <h2>主页Home - {location?.state?.username || ''}</h2>
  )
}
